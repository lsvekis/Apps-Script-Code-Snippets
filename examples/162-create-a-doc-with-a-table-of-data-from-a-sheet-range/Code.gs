// 162) Create a doc with a table of data from a sheet range
function ex162_docTableFromSheet() {
  const sh=SpreadsheetApp.getActiveSheet();
  const values=sh.getRange('A1:D10').getValues();
  const doc=DocumentApp.create('Table Doc ' + Date.now());
  doc.getBody().appendTable(values);
  Logger.log(doc.getUrl());
}
