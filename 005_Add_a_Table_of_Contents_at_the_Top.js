function insertTableOfContents() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  body.insertParagraph(0, "Table of 
Contents").setHeading(DocumentApp.ParagraphHeading.HEADING1); 
  body.insertTableOfContents(1, DocumentApp.TableOfContentsType.FLAT); 
}
