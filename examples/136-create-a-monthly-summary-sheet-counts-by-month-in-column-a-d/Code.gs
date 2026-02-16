// 136) Create a monthly summary sheet (counts by month in column A dates)
function ex136_monthlySummary() {
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getActiveSheet();
  const dates = sh.getRange('A2:A' + sh.getLastRow()).getValues().flat().map(v=>new Date(v)).filter(d=>!isNaN(d));
  const tz = ss.getSpreadsheetTimeZone();
  const map = {};
  dates.forEach(d=>{
    const k = Utilities.formatDate(d, tz, 'yyyy-MM');
    map[k] = (map[k]||0)+1;
  });
  const out = [['Month','Count'], ...Object.entries(map).sort().map(([k,v])=>[k,v])];
  const dst = ss.getSheetByName('Monthly Summary') || ss.insertSheet('Monthly Summary');
  dst.clear(); dst.getRange(1,1,out.length,2).setValues(out);
}
