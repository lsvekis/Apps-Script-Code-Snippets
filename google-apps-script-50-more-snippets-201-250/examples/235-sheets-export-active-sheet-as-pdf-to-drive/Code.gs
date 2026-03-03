function ex235_exportActiveSheetAsPdf() {
  const ss = SpreadsheetApp.getActive();
  const url = 'https://docs.google.com/spreadsheets/d/' + ss.getId() + '/export?format=pdf';
  const token = ScriptApp.getOAuthToken();
  const resp = UrlFetchApp.fetch(url, {headers:{Authorization:'Bearer ' + token}});
  const file = DriveApp.createFile(resp.getBlob().setName(ss.getName() + '.pdf'));
  Logger.log(file.getUrl());
}
