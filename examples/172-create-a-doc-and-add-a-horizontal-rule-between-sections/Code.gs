// 172) Create a doc and add a horizontal rule between sections
function ex172_docSectionsWithRules() {
  const doc=DocumentApp.create('Sectioned Doc ' + Date.now());
  const body=doc.getBody();
  ['One','Two','Three'].forEach((name)=>{
    body.appendParagraph(name).setHeading(DocumentApp.ParagraphHeading.HEADING2);
    body.appendParagraph('Content...');
    body.appendHorizontalRule();
  });
  Logger.log(doc.getUrl());
}
