// 112) Cleanup: trim + collapse spaces in a range
function ex112_cleanupTrim() {
  const sh = SpreadsheetApp.getActiveSheet();
  const range = sh.getRange(2,1,Math.max(1, sh.getLastRow()-1), sh.getLastColumn());
  const data = range.getValues().map(row => row.map(v => {
    if (typeof v !== 'string') return v;
    return v.trim().replace(/\s+/g, ' ');
  }));
  range.setValues(data);
}
