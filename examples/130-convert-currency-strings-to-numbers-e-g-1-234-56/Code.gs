// 130) Convert currency strings to numbers (e.g., "$1,234.56")
function ex130_currencyToNumber() {
  const sh = SpreadsheetApp.getActiveSheet();
  const r = sh.getRange('B2:B' + sh.getLastRow());
  const out = r.getValues().map(([v]) => {
    const n = Number(String(v||'').replace(/[^0-9.-]/g,''));
    return [isNaN(n) ? '' : n];
  });
  r.setValues(out);
}
