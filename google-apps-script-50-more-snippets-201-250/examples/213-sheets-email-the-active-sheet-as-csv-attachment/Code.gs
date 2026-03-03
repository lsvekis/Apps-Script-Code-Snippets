function ex213_emailSheetAsCsv() {
  const sh = SpreadsheetApp.getActiveSheet();
  const values = sh.getDataRange().getValues();
  const csv = values.map(r => r.map(v => `"${String(v).replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob = Utilities.newBlob(csv, 'text/csv', sh.getName() + '.csv');
  GmailApp.sendEmail(Session.getActiveUser().getEmail(), 'CSV Export: ' + sh.getName(), 'Attached.', {attachments:[blob]});
}
