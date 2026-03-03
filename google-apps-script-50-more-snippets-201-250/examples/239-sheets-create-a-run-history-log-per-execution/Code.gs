function ex239_logRunHistory(name) {
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getSheetByName('Run History') || ss.insertSheet('Run History');
  if (sh.getLastRow() === 0) sh.appendRow(['Time','User','Job']);
  sh.appendRow([new Date(), Session.getActiveUser().getEmail(), name]);
}
