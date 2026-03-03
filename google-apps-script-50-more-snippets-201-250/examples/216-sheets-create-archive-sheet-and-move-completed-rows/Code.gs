function ex216_archiveDoneRows() {
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getActiveSheet();
  const arch = ss.getSheetByName('Archive') || ss.insertSheet('Archive');
  const data = sh.getDataRange().getValues();
  const header = data[0];
  const keep = [header];
  const moved = [];
  for (let i=1;i<data.length;i++) {
    if (String(data[i][2]).trim().toLowerCase() === 'done') moved.push(data[i]);
    else keep.push(data[i]);
  }
  sh.clearContents();
  sh.getRange(1,1,keep.length,keep[0].length).setValues(keep);
  if (arch.getLastRow() === 0) arch.getRange(1,1,1,header.length).setValues([header]);
  if (moved.length) arch.getRange(arch.getLastRow()+1,1,moved.length,header.length).setValues(moved);
}
