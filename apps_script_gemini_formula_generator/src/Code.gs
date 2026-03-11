
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("AI Tools")
    .addItem("Formula Generator", "showFormulaSidebar")
    .addToUi();
}

function showFormulaSidebar() {
  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createHtmlOutputFromFile("Sidebar")
      .setTitle("AI Formula Generator")
  );
}
