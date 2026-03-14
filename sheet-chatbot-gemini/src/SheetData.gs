function buildRelevantContext_(sheet, question, config) {
  const values = sheet.getDataRange().getDisplayValues();
  const meta = {
    sheetName: sheet.getName(),
    totalRowsInSheet: Math.max(0, values.length - 1),
    rowsUsedForAnswer: 0
  };

  if (!values || values.length < 2) {
    return {
      headers: [],
      rows: [],
      contextText: '',
      meta
    };
  }

  const headers = values[0].map(h => String(h).trim());
  const dataRows = values.slice(1)
    .map((row, idx) => ({
      rowNumber: idx + 2,
      values: row,
      text: row.join(' | ')
    }))
    .filter(r => r.values.some(cell => String(cell).trim() !== ''));

  const relevantRows = rankRowsByQuestion_(headers, dataRows, question)
    .slice(0, config.maxRows);

  meta.rowsUsedForAnswer = relevantRows.length;

  return {
    headers,
    rows: relevantRows,
    contextText: formatRowsAsContext_(headers, relevantRows),
    meta
  };
}

function rankRowsByQuestion_(headers, dataRows, question) {
  const q = normalizeText_(question);
  const qTokens = tokenize_(q);

  const headerBoostTokens = tokenize_(headers.join(' '));

  const scored = dataRows.map(row => {
    const rowText = normalizeText_(headers.join(' ') + ' ' + row.values.join(' '));
    const rowTokens = tokenize_(rowText);

    let score = 0;

    qTokens.forEach(token => {
      if (rowText.includes(token)) score += 3;
      if (rowTokens.includes(token)) score += 2;
      if (headerBoostTokens.includes(token)) score += 1;
    });

    if (score === 0 && qTokens.length <= 2) {
      qTokens.forEach(token => {
        row.values.forEach(cell => {
          if (normalizeText_(String(cell)).includes(token)) score += 1;
        });
      });
    }

    return Object.assign({}, row, { score });
  });

  const matched = scored.filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score || a.rowNumber - b.rowNumber);

  if (matched.length) return matched;

  return scored.slice(0, Math.min(50, scored.length));
}

function formatRowsAsContext_(headers, rows) {
  const lines = [];
  lines.push(`Columns: ${headers.join(' | ')}`);
  lines.push('Approved spreadsheet rows:');

  rows.forEach(row => {
    const pairs = headers.map((header, i) => `${header}: ${row.values[i] || ''}`);
    lines.push(`Row ${row.rowNumber}: ${pairs.join(' ; ')}`);
  });

  return lines.join('\n');
}

function normalizeText_(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^\w\s.-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize_(text) {
  return normalizeText_(text)
    .split(' ')
    .filter(Boolean)
    .filter(token => token.length > 1);
}

function buildGroundedPrompt_(question, sheetContext, config) {
  const citationRule = config.allowRowCitations
    ? 'When possible, include spreadsheet row references like "Row 12".'
    : 'Do not include row references unless absolutely necessary.';

  return `
You are a spreadsheet chatbot.

Your job:
- Answer ONLY from the approved spreadsheet rows below.
- Never use outside knowledge.
- Never infer facts not directly supported by the sheet.
- If the answer is not in the sheet, reply exactly:
That information is not available in the sheet.
- Be concise, accurate, and businesslike.
- If the user asks for a count, count only from the approved rows.
- If the user asks for a list, list only values found in the sheet.
- If column names matter, use the provided headers exactly.
- ${citationRule}

User question:
${question}

Spreadsheet context:
${sheetContext.contextText}
  `.trim();
}
