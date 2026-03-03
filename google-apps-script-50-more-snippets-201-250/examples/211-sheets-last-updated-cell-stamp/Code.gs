function ex211_stampLastUpdated() {
  const sh = SpreadsheetApp.getActiveSheet();
  sh.getRange('A1').setValue('Last updated: ' + new Date());
}
