function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("AI Tools")
    .addItem("Gmail Draft Assistant", "showGmailAssistant")
    .addToUi();
}

function showGmailAssistant() {
  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createHtmlOutputFromFile("Sidebar")
      .setTitle("Gmail Draft Assistant")
  );
}
