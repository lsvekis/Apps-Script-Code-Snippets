const MAX_DATA_ROWS=100;
function readActiveSheet_(){
 const s=SpreadsheetApp.getActiveSheet(),lr=s.getLastRow(),lc=s.getLastColumn();
 if(!lr||!lc)throw new Error("The active sheet contains no data.");
 const rows=Math.min(lr,MAX_DATA_ROWS);
 return {sheetName:s.getName(),totalRows:lr,rowsRead:rows,
  values:s.getRange(1,1,rows,lc).getDisplayValues()};
}