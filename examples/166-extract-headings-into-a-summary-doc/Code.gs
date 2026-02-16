// 166) Extract headings into a summary doc
function ex166_headingsSummary() {
  const src=DocumentApp.getActiveDocument();
  const headings=src.getBody().getParagraphs()
    .filter(p=>String(p.getHeading()).includes('HEADING'))
    .map(p=>p.getText());
  const doc=DocumentApp.create('Headings Summary ' + Date.now());
  headings.forEach(h=>doc.getBody().appendParagraph(h));
  Logger.log(doc.getUrl());
}
