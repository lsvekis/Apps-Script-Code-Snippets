// 119) Convert formulas to values in selection
function ex119_formulasToValues() {
  const sh = SpreadsheetApp.getActiveSheet();
  const r = sh.getActiveRange();
  r.copyTo(r, {contentsOnly: true});
}
