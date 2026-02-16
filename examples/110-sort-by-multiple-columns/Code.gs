// 110) Sort by multiple columns
function ex110_multiSort() {
  const sh = SpreadsheetApp.getActiveSheet();
  const range = sh.getDataRange();
  range.sort([{column: 2, ascending: true}, {column: 1, ascending: true}]);
}
