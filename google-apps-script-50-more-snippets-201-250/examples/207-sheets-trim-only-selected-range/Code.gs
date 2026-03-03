function ex207_trimSelection() {
  const r = SpreadsheetApp.getActiveRange();
  const out = r.getValues().map(row => row.map(v =>
    typeof v === 'string' ? v.trim().replace(/\s+/g,' ') : v
  ));
  r.setValues(out);
}
