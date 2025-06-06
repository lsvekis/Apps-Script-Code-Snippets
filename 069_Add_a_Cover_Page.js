function addCoverPage() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  body.insertParagraph(0, "My Document 
Title").setHeading(DocumentApp.ParagraphHeading.TITLE); 
  body.insertParagraph(1, "Author 
Name").setHeading(DocumentApp.ParagraphHeading.HEADING2); 
  body.insertParagraph(2, 
"").setHeading(DocumentApp.ParagraphHeading.NORMAL); 
  body.insertPageBreak(3); 
}
