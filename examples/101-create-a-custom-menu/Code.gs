// 101) Create a custom menu
function ex101_customMenu() {
  SpreadsheetApp.getUi()
    .createMenu('Automation')
    .addItem('Run Cleanup', 'ex112_cleanupTrim')
    .addToUi();
}
