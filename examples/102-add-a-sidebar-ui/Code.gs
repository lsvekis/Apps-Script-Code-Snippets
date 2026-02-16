// 102) Add a sidebar UI
function ex102_showSidebar() {
  const html = HtmlService.createHtmlOutput('<h3>Sidebar</h3><p>Ready.</p>');
  SpreadsheetApp.getUi().showSidebar(html);
}
