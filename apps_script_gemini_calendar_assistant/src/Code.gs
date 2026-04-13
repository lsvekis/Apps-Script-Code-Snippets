function onOpen(){
 SpreadsheetApp.getUi().createMenu("AI Tools")
 .addItem("AI Calendar Assistant","showSidebar").addToUi();
}
function showSidebar(){
 SpreadsheetApp.getUi().showSidebar(HtmlService.createHtmlOutputFromFile("Sidebar"));
}