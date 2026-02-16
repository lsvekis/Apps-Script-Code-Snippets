// 200) End-to-end: read sheet → create doc → save PDF → email link
function ex200_sheetDocPdfEmail() {
  const ss=SpreadsheetApp.getActive();
  const sh=ss.getActiveSheet();
  const values=sh.getRange('A1:D10').getValues();
  const doc=DocumentApp.create('Export ' + Date.now());
  doc.getBody().appendParagraph('Export').setHeading(DocumentApp.ParagraphHeading.HEADING1);
  doc.getBody().appendTable(values);
  doc.saveAndClose();

  const docFile=DriveApp.getFileById(doc.getId());
  const pdf=docFile.getBlob().getAs(MimeType.PDF).setName(docFile.getName()+'.pdf');
  const pdfFile=DriveApp.createFile(pdf);
  GmailApp.sendEmail(Session.getActiveUser().getEmail(), 'Your PDF Export', 'Here is your PDF: ' + pdfFile.getUrl());
}
