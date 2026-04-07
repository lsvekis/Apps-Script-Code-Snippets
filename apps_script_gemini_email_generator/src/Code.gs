function onOpen() {
  GmailApp.getUi().createMenu("AI Tools")
    .addItem("AI Email Generator", "showSidebar")
    .addToUi();
}
function showSidebar() {
  GmailApp.getUi().showSidebar(HtmlService.createHtmlOutputFromFile("Sidebar"));
}