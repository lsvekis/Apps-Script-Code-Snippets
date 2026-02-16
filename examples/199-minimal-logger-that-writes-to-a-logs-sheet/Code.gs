// 199) Minimal logger that writes to a “Logs” sheet
function ex199_sheetLogger(message) {
  const ss=SpreadsheetApp.getActive();
  const sh=ss.getSheetByName('Logs') || ss.insertSheet('Logs');
  sh.appendRow([new Date(), Session.getActiveUser().getEmail(), message]);
}
