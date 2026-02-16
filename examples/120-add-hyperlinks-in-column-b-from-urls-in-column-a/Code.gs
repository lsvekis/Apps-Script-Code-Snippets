// 120) Add hyperlinks in column B from URLs in column A
function ex120_makeHyperlinks() {
  const sh = SpreadsheetApp.getActiveSheet();
  const last = sh.getLastRow();
  const urls = sh.getRange(2,1,Math.max(1,last-1),1).getValues().flat();
  const out = urls.map(u => [u ? `=HYPERLINK("${u}","Open")` : '']);
  sh.getRange(2,2,out.length,1).setValues(out);
}
