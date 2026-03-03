function ex221_createSimpleReportDoc() {
  const doc = DocumentApp.create('Simple Report ' + Date.now());
  const b = doc.getBody();
  b.appendParagraph('Report').setHeading(DocumentApp.ParagraphHeading.HEADING1);
  b.appendParagraph('Generated: ' + new Date());
  b.appendParagraph('Summary:').setHeading(DocumentApp.ParagraphHeading.HEADING2);
  b.appendParagraph('Add details here...');
  doc.saveAndClose();
  Logger.log(doc.getUrl());
}
