function ex215_protectHeaderRow() {
  const sh = SpreadsheetApp.getActiveSheet();
  const p = sh.getRange('1:1').protect().setDescription('Protect headers');
  p.removeEditors(p.getEditors());
}
