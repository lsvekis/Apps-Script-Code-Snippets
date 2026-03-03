function ex212_dailyCleanup() {
  ex209_formatHeaderRow();
  const sh = SpreadsheetApp.getActiveSheet();
  const rng = sh.getDataRange();
  const vals = rng.getValues().map(row => row.map(v => typeof v === 'string' ? v.trim() : v));
  rng.setValues(vals);
}
