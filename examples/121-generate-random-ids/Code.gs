// 121) Generate random IDs
function ex121_generateIds() {
  const sh = SpreadsheetApp.getActiveSheet();
  const last = sh.getLastRow();
  const out = Array.from({length: Math.max(1,last-1)}, () => [Utilities.getUuid()]);
  sh.getRange(2,5,out.length,1).setValues(out);
}
