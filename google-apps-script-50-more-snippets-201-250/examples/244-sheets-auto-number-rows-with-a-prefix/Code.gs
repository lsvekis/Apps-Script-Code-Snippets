function ex244_numberRowsWithPrefix() {
  const sh = SpreadsheetApp.getActiveSheet();
  const last = sh.getLastRow();
  const out = [];
  for (let i=2;i<=last;i++) out.push([`TASK-${String(i-1).padStart(4,'0')}`]);
  if (out.length) sh.getRange(2,1,out.length,1).setValues(out);
}
