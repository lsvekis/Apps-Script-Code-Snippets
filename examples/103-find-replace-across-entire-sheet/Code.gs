// 103) Find & replace across entire sheet
function ex103_findReplaceSheet() {
  const sh = SpreadsheetApp.getActiveSheet();
  sh.createTextFinder('foo').replaceAllWith('bar');
}
