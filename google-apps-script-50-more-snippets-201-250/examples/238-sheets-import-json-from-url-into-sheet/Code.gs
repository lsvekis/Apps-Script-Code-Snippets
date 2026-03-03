function ex238_importJsonToSheet() {
  const url = 'https://httpbin.org/json';
  const resp = UrlFetchApp.fetch(url);
  const obj = JSON.parse(resp.getContentText());

  const sh = SpreadsheetApp.getActiveSheet();
  sh.clearContents();
  sh.getRange('A1').setValue(JSON.stringify(obj, null, 2));
}
