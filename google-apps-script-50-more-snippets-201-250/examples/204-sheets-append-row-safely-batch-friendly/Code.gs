function ex204_fastAppendRow(values) {
  const sh = SpreadsheetApp.getActiveSheet();
  const row = sh.getLastRow() + 1;
  sh.getRange(row, 1, 1, values.length).setValues([values]);
}
