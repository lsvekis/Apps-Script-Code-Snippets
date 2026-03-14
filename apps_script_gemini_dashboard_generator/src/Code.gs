function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("AI Tools")
    .addItem("AI Dashboard Generator", "showDashboardSidebar")
    .addToUi();
}

function showDashboardSidebar() {
  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createHtmlOutputFromFile("Sidebar")
      .setTitle("AI Dashboard Builder")
  );
}