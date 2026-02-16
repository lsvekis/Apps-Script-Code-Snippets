// 159) Save an HTML file to Drive
function ex159_saveHtmlFile() {
  const html = '<!doctype html><html><body><h1>Hello</h1></body></html>';
  const file = DriveApp.createFile('page.html', html, MimeType.HTML);
  Logger.log(file.getUrl());
}
