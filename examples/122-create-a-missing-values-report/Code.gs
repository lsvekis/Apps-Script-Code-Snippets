// 122) Create a “missing values” report
function ex122_missingValuesReport() {
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getActiveSheet();
  const rep = ss.getSheetByName('Missing Report') || ss.insertSheet('Missing Report');
  const data = sh.getDataRange().getValues();
  const header = data[0] || [];
  const misses = [];
  for (let r=1;r<data.length;r++){
    for (let c=0;c<header.length;c++){
      if (data[r][c] === '' || data[r][c] == null) misses.push([r+1, c+1, header[c] || '', 'blank']);
    }
  }
  rep.clear();
  rep.getRange(1,1,1,4).setValues([['Row','Col','Header','Issue']]);
  if (misses.length) rep.getRange(2,1,misses.length,4).setValues(misses);
}
