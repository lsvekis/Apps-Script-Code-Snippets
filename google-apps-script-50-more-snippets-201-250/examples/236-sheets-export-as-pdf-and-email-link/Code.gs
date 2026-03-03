function ex236_exportPdfAndEmailLink() {
  const ss = SpreadsheetApp.getActive();
  const url = 'https://docs.google.com/spreadsheets/d/' + ss.getId() + '/export?format=pdf';
  const token = ScriptApp.getOAuthToken();
  const resp = UrlFetchApp.fetch(url, {headers:{Authorization:'Bearer ' + token}});
  const pdf = DriveApp.createFile(resp.getBlob().setName(ss.getName() + '.pdf'));
  GmailApp.sendEmail(Session.getActiveUser().getEmail(), 'PDF Export Ready', 'Link: ' + pdf.getUrl());
}
