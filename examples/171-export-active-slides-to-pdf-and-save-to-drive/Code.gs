// 171) Export active Slides to PDF and save to Drive
function ex171_exportSlidesPdf() {
  const presId=SlidesApp.getActivePresentation().getId();
  const url='https://docs.google.com/presentation/d/' + presId + '/export/pdf';
  const token=ScriptApp.getOAuthToken();
  const resp=UrlFetchApp.fetch(url,{headers:{Authorization:'Bearer ' + token}});
  const file=DriveApp.createFile(resp.getBlob().setName('deck.pdf'));
  Logger.log(file.getUrl());
}
