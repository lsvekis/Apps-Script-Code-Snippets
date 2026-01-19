function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("AI Tools")
    .addItem("Generate AI Report", "showReportUI")
    .addToUi();
}

function showReportUI() {
  const html = HtmlService.createHtmlOutputFromFile("Sidebar")
    .setTitle("AI Report Generator");
  SpreadsheetApp.getUi().showSidebar(html);
}
