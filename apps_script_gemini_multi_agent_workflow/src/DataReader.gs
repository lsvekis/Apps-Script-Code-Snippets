const MAX_DATA_ROWS = 100;
function readSourceData_(){
  const sheet=SpreadsheetApp.getActiveSheet();
  const lastRow=sheet.getLastRow(), lastColumn=sheet.getLastColumn();
  if(!lastRow||!lastColumn) throw new Error("The active sheet contains no data.");
  const rowsToRead=Math.min(lastRow,MAX_DATA_ROWS);
  return {sheetName:sheet.getName(),totalRows:lastRow,rowsRead:rowsToRead,data:sheet.getRange(1,1,rowsToRead,lastColumn).getDisplayValues()};
}
