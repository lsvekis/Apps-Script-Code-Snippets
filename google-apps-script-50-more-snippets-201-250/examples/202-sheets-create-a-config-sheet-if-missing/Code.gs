function ex202_ensureConfigSheet() {
  const ss = SpreadsheetApp.getActive();
  let sh = ss.getSheetByName('Config');
  if (!sh) sh = ss.insertSheet('Config');
  if (sh.getLastRow() === 0) {
    sh.getRange(1,1,4,2).setValues([
      ['key','value'],
      ['ownerEmail', Session.getActiveUser().getEmail()],
      ['timezone', ss.getSpreadsheetTimeZone()],
      ['version','1.0']
    ]);
  }
}
