function addSummarySection() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  
body.appendParagraph('Summary').setHeading(DocumentApp.ParagraphHeadin
g.HEADING1); 
}
