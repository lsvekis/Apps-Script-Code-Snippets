function ex245_freezeSelectionValues() {
  const r = SpreadsheetApp.getActiveRange();
  r.copyTo(r, {contentsOnly:true});
}
