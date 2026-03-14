function getAppConfig_() {
  const docProps = PropertiesService.getDocumentProperties();

  return {
    sheetName: docProps.getProperty('CHATBOT_SHEET_NAME') || '',
    maxRows: Number(docProps.getProperty('CHATBOT_MAX_ROWS') || 150),
    temperature: Number(docProps.getProperty('CHATBOT_TEMPERATURE') || 0.1),
    model: docProps.getProperty('CHATBOT_MODEL') || 'gemini-2.5-flash',
    historySize: Number(docProps.getProperty('CHATBOT_HISTORY_SIZE') || 12),
    allowRowCitations: String(docProps.getProperty('CHATBOT_ALLOW_ROW_CITATIONS') || 'true') === 'true'
  };
}

function getGeminiApiKey_() {
  const key = PropertiesService.getScriptProperties().getProperty('GEMINI_API_KEY');
  if (!key) {
    throw new Error('Missing GEMINI_API_KEY in Script Properties.');
  }
  return key;
}

function getChatHistory_() {
  const raw = PropertiesService.getUserProperties().getProperty('CHATBOT_HISTORY');
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (err) {
    return [];
  }
}

function appendChatHistory_(entry) {
  const config = getAppConfig_();
  const history = getChatHistory_();
  history.push(entry);

  const maxEntries = Math.max(2, config.historySize * 2);
  const trimmed = history.slice(-maxEntries);

  PropertiesService.getUserProperties().setProperty('CHATBOT_HISTORY', JSON.stringify(trimmed));
}
