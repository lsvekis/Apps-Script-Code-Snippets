// 113) Convert all text to Title Case in column
function ex113_titleCaseColA() {
  const sh = SpreadsheetApp.getActiveSheet();
  const r = sh.getRange(2,1,Math.max(1, sh.getLastRow()-1),1);
  const out = r.getValues().map(([v]) => [String(v||'').toLowerCase().replace(/\b\w/g, c => c.toUpperCase())]);
  r.setValues(out);
}
