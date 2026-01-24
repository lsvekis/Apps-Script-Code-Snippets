function askKb(question) {
  if (!question || !String(question).trim()) return "Enter a question.";

  const sheet = getKbSheet_();
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return "KB_Index is empty. Run indexing first.";

  const q = String(question).toLowerCase().trim();
  const rows = values.slice(1);

  function scoreRow_(row) {
    const title = String(row[1] || "");
    const summary = String(row[3] || "");
    const keywords = String(row[4] || "");
    const hay = (title + " " + summary + " " + keywords).toLowerCase();

    let score = 0;
    if (hay.indexOf(q) !== -1) score += 10;

    const tokens = q.split(/\s+/).filter(t => t.length > 2).slice(0, 12);
    tokens.forEach(t => { if (hay.indexOf(t) !== -1) score += 2; });

    return score;
  }

  const ranked = rows
    .map(r => ({ row: r, score: scoreRow_(r) }))
    .sort((a, b) => b.score - a.score);

  const top = ranked
    .filter(x => x.score > 0)
    .slice(0, 5)
    .map(x => ({
      title: x.row[1],
      url: x.row[2],
      summary: x.row[3]
    }));

  if (top.length === 0) {
    return "No good matches found in KB_Index. Try rephrasing or indexing more Docs.";
  }

  const prompt = [
    "You are an assistant answering using ONLY the provided sources.",
    "If the sources don't contain the answer, say what's missing and suggest what doc would help.",
    "",
    "Question:",
    question,
    "",
    "Sources (title, url, summary):",
    JSON.stringify(top),
    "",
    "Output format:",
    "Answer: <short, helpful answer>",
    "",
    "Citations:",
    "- <title> — <url>",
    "- <title> — <url>"
  ].join("\n");

  try {
    const answer = callGemini(prompt, "");
    return String(answer || "").trim();
  } catch (e) {
    return "Gemini error: " + e;
  }
}
