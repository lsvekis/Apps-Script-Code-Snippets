function ex206_removeDuplicatesAB() {
  const sh = SpreadsheetApp.getActiveSheet();
  sh.getDataRange().removeDuplicates([1,2]);
}
