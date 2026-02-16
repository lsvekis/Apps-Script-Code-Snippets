// 111) Split text to columns by delimiter
function ex111_splitToColumns() {
  const sh = SpreadsheetApp.getActiveSheet();
  const r = sh.getRange('A2:A' + sh.getLastRow());
  const values = r.getValues().map(([v]) => String(v || '').split('|'));
  const maxLen = Math.max(...values.map(a => a.length), 1);
  const out = values.map(a => a.concat(Array(maxLen - a.length).fill('')));
  sh.getRange(2, 2, out.length, maxLen).setValues(out);
}
