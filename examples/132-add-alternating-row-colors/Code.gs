// 132) Add alternating row colors
function ex132_alternateColors() {
  const sh = SpreadsheetApp.getActiveSheet();
  sh.getRange(1,1,sh.getLastRow(),sh.getLastColumn()).applyRowBanding();
}
