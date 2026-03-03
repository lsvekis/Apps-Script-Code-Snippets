function ex240_clearInputArea() {
  const sh = SpreadsheetApp.getActiveSheet();
  sh.getRange('B2:E100').clearContent();
}
