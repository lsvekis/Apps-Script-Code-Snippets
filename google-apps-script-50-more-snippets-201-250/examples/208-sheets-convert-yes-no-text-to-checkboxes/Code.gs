function ex208_yesNoToCheckboxes() {
  const sh = SpreadsheetApp.getActiveSheet();
  const r = sh.getActiveRange();
  const out = r.getValues().map(row => row.map(v => {
    const s = String(v || '').toLowerCase().trim();
    if (['yes','y','true','1'].includes(s)) return true;
    if (['no','n','false','0'].includes(s)) return false;
    return '';
  }));
  r.setValues(out);
  r.insertCheckboxes();
}
