// 156) Copy a doc as PDF to Drive
function ex156_exportDocAsPdf() {
  const docId = DocumentApp.getActiveDocument().getId();
  const url = 'https://docs.google.com/document/d/' + docId + '/export?format=pdf';
  const token = ScriptApp.getOAuthToken();
  const resp = UrlFetchApp.fetch(url, {headers:{Authorization:'Bearer ' + token}});
  const file = DriveApp.createFile(resp.getBlob().setName('export.pdf'));
  Logger.log(file.getUrl());
}
