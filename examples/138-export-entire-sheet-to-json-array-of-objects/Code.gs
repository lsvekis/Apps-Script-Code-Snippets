// 138) Export entire sheet to JSON (array of objects)
function ex138_exportToJson() {
  const sh = SpreadsheetApp.getActiveSheet();
  const data = sh.getDataRange().getValues();
  const headers = data.shift().map(String);
  const objs = data.map(r => Object.fromEntries(headers.map((h,i)=>[h, r[i]])));
  Logger.log(JSON.stringify(objs, null, 2));
}
