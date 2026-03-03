function ex214_log(message) {
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getSheetByName('Logs') || ss.insertSheet('Logs');
  sh.appendRow([new Date(), Session.getActiveUser().getEmail(), message]);
}
