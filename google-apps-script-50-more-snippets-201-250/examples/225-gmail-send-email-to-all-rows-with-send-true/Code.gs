function ex225_sendEmailsFromSheet() {
  const sh = SpreadsheetApp.getActiveSheet();
  const data = sh.getDataRange().getValues();
  const header = data[0].map(String);
  const emailCol = header.indexOf('Email');
  const sendCol = header.indexOf('Send');
  const sentCol = header.indexOf('SentAt');
  if (emailCol === -1 || sendCol === -1 || sentCol === -1) throw new Error('Need columns: Email, Send, SentAt');

  for (let r=1;r<data.length;r++) {
    if (data[r][sendCol] === true && !data[r][sentCol]) {
      const to = data[r][emailCol];
      GmailApp.sendEmail(to, 'Hello', 'This is an automated message.');
      sh.getRange(r+1, sentCol+1).setValue(new Date());
    }
  }
}
