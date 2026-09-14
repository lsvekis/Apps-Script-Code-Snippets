function onOpen(){
  SpreadsheetApp.getUi().createMenu("AI Command Center")
    .addItem("Open Command Center","showCommandCenter").addToUi();
}
function showCommandCenter(){
  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createHtmlOutputFromFile("CommandCenter")
      .setTitle("AI Workspace Command Center")
  );
}