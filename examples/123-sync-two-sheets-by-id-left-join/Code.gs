// 123) Sync two sheets by ID (left join)
function ex123_syncById() {
  const ss = SpreadsheetApp.getActive();
  const a = ss.getSheetByName('SheetA') || ss.getActiveSheet();
  const b = ss.getSheetByName('SheetB');
  if (!b) throw new Error('Create SheetB with IDs in col A');
  const aData = a.getDataRange().getValues();
  const bData = b.getDataRange().getValues();
  const bMap = new Map(bData.slice(1).map(r => [String(r[0]).trim(), r]));
  const out = [aData[0].concat(bData[0].slice(1))];
  aData.slice(1).forEach(r => {
    const key = String(r[0]).trim();
    const match = bMap.get(key);
    out.push(r.concat(match ? match.slice(1) : Array(bData[0].length-1).fill('')));
  });
  const dst = ss.getSheetByName('Synced') || ss.insertSheet('Synced');
  dst.clear();
  dst.getRange(1,1,out.length,out[0].length).setValues(out);
}
