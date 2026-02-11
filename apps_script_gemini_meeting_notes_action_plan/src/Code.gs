function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("AI Tools")
    .addItem("Meeting Notes → Action Plan", "showMeetingAssistant")
    .addToUi();
}

function showMeetingAssistant() {
  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createHtmlOutputFromFile("Sidebar")
      .setTitle("Meeting Notes Assistant")
  );
}
