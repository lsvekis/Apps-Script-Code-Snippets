// 115) Copy only visible rows (after filter) to another sheet
function ex115_copyVisibleRows() {
  const ss = SpreadsheetApp.getActive();
  const src = ss.getActiveSheet();
  const dst = ss.getSheetByName('Visible Copy') || ss.insertSheet('Visible Copy');
  const range = src.getDataRange();
  const values = range.getValues();
  const out = [];
  for (let i=0;i<values.length;i++){
    if (!src.isRowHiddenByFilter(i+1) && !src.isRowHiddenByUser(i+1)) out.push(values[i]);
  }
  dst.clear();
  dst.getRange(1,1,out.length,out[0].length).setValues(out);
}
