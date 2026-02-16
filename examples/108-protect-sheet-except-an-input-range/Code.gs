// 108) Protect sheet except an input range
function ex108_protectExceptRange() {
  const sh = SpreadsheetApp.getActiveSheet();
  const p = sh.protect().setDescription('Protected except inputs');
  p.setUnprotectedRanges([sh.getRange('B2:D20')]);
}
