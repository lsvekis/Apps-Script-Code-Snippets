// 107) Add checkbox column
function ex107_addCheckboxes() {
  const sh = SpreadsheetApp.getActiveSheet();
  sh.getRange('D2:D').insertCheckboxes();
}
