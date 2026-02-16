// 179) Export doc as DOCX to Drive
function ex179_exportDocAsDocx() {
  const docId=DocumentApp.getActiveDocument().getId();
  const url='https://docs.google.com/document/d/' + docId + '/export?format=docx';
  const token=ScriptApp.getOAuthToken();
  const resp=UrlFetchApp.fetch(url,{headers:{Authorization:'Bearer ' + token}});
  const file=DriveApp.createFile(resp.getBlob().setName('export.docx'));
  Logger.log(file.getUrl());
}
