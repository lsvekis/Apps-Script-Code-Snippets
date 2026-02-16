// 109) Create a filter view-style filter (basic filter)
function ex109_createFilter() {
  const sh = SpreadsheetApp.getActiveSheet();
  const r = sh.getDataRange();
  if (!sh.getFilter()) r.createFilter();
}
