// 197) Create an HTML file, publish link, and email it
function ex197_publishHtmlAndEmail() {
  const html='<h1>Report</h1><p>Generated ' + new Date() + '</p>';
  const file=DriveApp.createFile('report.html', html, MimeType.HTML);
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  GmailApp.sendEmail(Session.getActiveUser().getEmail(), 'HTML Report Link', file.getUrl());
}
