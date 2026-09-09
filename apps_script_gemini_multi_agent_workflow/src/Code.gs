function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("AI Tools")
    .addItem("Multi-Agent Report", "showMultiAgentSidebar")
    .addToUi();
}

function showMultiAgentSidebar() {
  const html = HtmlService.createHtmlOutputFromFile("Sidebar")
    .setTitle("Multi-Agent AI Workflow");
  SpreadsheetApp.getUi().showSidebar(html);
}
