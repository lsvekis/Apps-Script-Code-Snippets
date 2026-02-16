// 184) Save email bodies to a Google Doc
function ex184_emailBodiesToDoc() {
  const threads=GmailApp.search('newer_than:3d',0,5);
  const doc=DocumentApp.create('Email Bodies ' + Date.now());
  const body=doc.getBody();
  threads.forEach(t=>{
    const m=t.getMessages().pop();
    body.appendParagraph(m.getSubject()).setHeading(DocumentApp.ParagraphHeading.HEADING2);
    body.appendParagraph(m.getPlainBody().slice(0,2000));
    body.appendHorizontalRule();
  });
  Logger.log(doc.getUrl());
}
