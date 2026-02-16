// 116) Create pivot table (basic)
function ex116_createPivot() {
  const ss = SpreadsheetApp.getActive();
  const src = ss.getActiveSheet();
  const pivot = ss.getSheetByName('Pivot') || ss.insertSheet('Pivot');
  pivot.clear();
  const sourceRange = src.getDataRange();
  const anchor = pivot.getRange('A1');
  const pt = anchor.createPivotTable(sourceRange);
  pt.addRowGroup(1);
  pt.addPivotValue(2, SpreadsheetApp.PivotTableSummarizeFunction.COUNTA);
}
