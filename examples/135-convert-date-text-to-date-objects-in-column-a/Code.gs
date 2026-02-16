// 135) Convert date text to Date objects in column A
function ex135_parseDates() {
  const sh = SpreadsheetApp.getActiveSheet();
  const r = sh.getRange('A2:A' + sh.getLastRow());
  const out = r.getValues().map(([v]) => {
    const d = new Date(v);
    return [isNaN(d.getTime()) ? '' : d];
  });
  r.setValues(out);
}
