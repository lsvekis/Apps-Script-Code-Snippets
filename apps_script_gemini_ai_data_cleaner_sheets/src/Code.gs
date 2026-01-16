// Menu + sidebar entry point for AI Data Cleaner (Sheets).

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("AI Tools")
    .addItem("AI Data Cleaner", "showCleaner")
    .addToUi();
}

function showCleaner() {
  const html = HtmlService.createHtmlOutputFromFile("Sidebar")
    .setTitle("AI Data Cleaner");
  SpreadsheetApp.getUi().showSidebar(html);
}
