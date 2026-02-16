// 104) Freeze first column + header row
function ex104_freezeHeaderAndFirstCol() {
  const sh = SpreadsheetApp.getActiveSheet();
  sh.setFrozenRows(1);
  sh.setFrozenColumns(1);
}
