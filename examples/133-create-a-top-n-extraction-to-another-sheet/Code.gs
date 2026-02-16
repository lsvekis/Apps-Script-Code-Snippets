// 133) Create a “top N” extraction to another sheet
function ex133_topN() {
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getActiveSheet();
  const data = sh.getDataRange().getValues();
  const header = data.shift();
  const sorted = data.sort((a,b)=> (b[1]||0)-(a[1]||0)).slice(0,10);
  const out = [header, ...sorted];
  const dst = ss.getSheetByName('Top10') || ss.insertSheet('Top10');
  dst.clear(); dst.getRange(1,1,out.length,out[0].length).setValues(out);
}
