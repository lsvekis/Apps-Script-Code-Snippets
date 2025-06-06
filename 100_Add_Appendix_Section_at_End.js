function addAppendixSection() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  
body.appendParagraph('Appendix').setHeading(DocumentApp.ParagraphHeadi
ng.HEADING1); 
}
