// 105) Auto-size columns (A:Z)
function ex105_autoResize() {
  const sh = SpreadsheetApp.getActiveSheet();
  sh.autoResizeColumns(1, Math.min(26, sh.getLastColumn()));
}
