function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Sheet Chatbot')
    .addItem('Open Chatbot', 'showChatbotSidebar')
    .addSeparator()
    .addItem('Initialize Settings', 'initializeSettings')
    .addItem('Reset Chat History', 'resetChatHistory')
    .addToUi();
}

function showChatbotSidebar() {
  const html = HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('Sheet Chatbot');
  SpreadsheetApp.getUi().showSidebar(html);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function initializeSettings() {
  const props = PropertiesService.getDocumentProperties();
  const existing = getAppConfig_();

  if (!existing.sheetName) {
    const firstSheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    props.setProperty('CHATBOT_SHEET_NAME', firstSheet.getName());
  }

  if (!existing.maxRows) props.setProperty('CHATBOT_MAX_ROWS', '150');
  if (!existing.temperature) props.setProperty('CHATBOT_TEMPERATURE', '0.1');
  if (!existing.model) props.setProperty('CHATBOT_MODEL', 'gemini-2.5-flash');
  if (!existing.historySize) props.setProperty('CHATBOT_HISTORY_SIZE', '12');
  if (!existing.allowRowCitations) props.setProperty('CHATBOT_ALLOW_ROW_CITATIONS', 'true');

  SpreadsheetApp.getUi().alert('Chatbot settings initialized.');
}

function getSidebarData() {
  return {
    config: getAppConfig_(),
    sheets: SpreadsheetApp.getActiveSpreadsheet().getSheets().map(s => s.getName()),
    history: getChatHistory_()
  };
}

function saveSettings(settings) {
  const props = PropertiesService.getDocumentProperties();

  props.setProperty('CHATBOT_SHEET_NAME', String(settings.sheetName || ''));
  props.setProperty('CHATBOT_MAX_ROWS', String(settings.maxRows || 150));
  props.setProperty('CHATBOT_TEMPERATURE', String(settings.temperature || 0.1));
  props.setProperty('CHATBOT_MODEL', String(settings.model || 'gemini-2.5-flash'));
  props.setProperty('CHATBOT_HISTORY_SIZE', String(settings.historySize || 12));
  props.setProperty('CHATBOT_ALLOW_ROW_CITATIONS', String(!!settings.allowRowCitations));

  return getSidebarData();
}

function resetChatHistory() {
  PropertiesService.getUserProperties().deleteProperty('CHATBOT_HISTORY');
  return { success: true };
}

function askSpreadsheetChatbot(question) {
  if (!question || !question.trim()) {
    return { ok: false, answer: 'Please enter a question.' };
  }

  const config = getAppConfig_();
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(config.sheetName);

  if (!sheet) {
    return { ok: false, answer: `Configured sheet "${config.sheetName}" was not found.` };
  }

  const sheetContext = buildRelevantContext_(sheet, question, config);
  if (!sheetContext.rows.length) {
    return {
      ok: true,
      answer: 'No usable data was found in the selected sheet.',
      meta: sheetContext.meta
    };
  }

  const prompt = buildGroundedPrompt_(question, sheetContext, config);
  const modelResponse = generateGeminiText_(prompt, config);

  appendChatHistory_({
    role: 'user',
    text: question,
    ts: new Date().toISOString()
  });

  appendChatHistory_({
    role: 'assistant',
    text: modelResponse,
    ts: new Date().toISOString()
  });

  return {
    ok: true,
    answer: modelResponse,
    meta: sheetContext.meta,
    history: getChatHistory_()
  };
}
