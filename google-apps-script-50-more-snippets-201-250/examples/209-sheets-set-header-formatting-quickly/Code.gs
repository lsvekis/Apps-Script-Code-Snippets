function ex209_formatHeaderRow() {
  const sh = SpreadsheetApp.getActiveSheet();
  const lastCol = Math.max(1, sh.getLastColumn());
  const header = sh.getRange(1,1,1,lastCol);
  header.setFontWeight('bold').setBackground('#f3f4f6');
  sh.setFrozenRows(1);
}
