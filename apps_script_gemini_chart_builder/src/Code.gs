function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("AI Tools")
    .addItem("AI Chart Builder", "showChartSidebar")
    .addToUi();
}

function showChartSidebar() {
  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createHtmlOutputFromFile("Sidebar")
      .setTitle("AI Chart Builder")
  );
}