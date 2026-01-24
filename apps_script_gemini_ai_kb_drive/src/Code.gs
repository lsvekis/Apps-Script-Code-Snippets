function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("AI Tools")
    .addItem("KB Builder (Index Folder)", "showKbBuilder")
    .addItem("KB Q&A (Ask)", "showKbAsk")
    .addToUi();
}

function showKbBuilder() {
  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createHtmlOutputFromFile("Sidebar_Index")
      .setTitle("KB Builder")
  );
}

function showKbAsk() {
  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createHtmlOutputFromFile("Sidebar_Ask")
      .setTitle("KB Q&A")
  );
}
