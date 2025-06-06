function insertTableOfFigures() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  body.insertParagraph(0, "Table of 
Figures").setHeading(DocumentApp.ParagraphHeading.HEADING1); 
}
