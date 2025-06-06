function duplicateFirstParagraph() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var first = body.getChild(0); 
  if (first.getType() == DocumentApp.ElementType.PARAGRAPH) { 
    body.insertParagraph(1, first.asParagraph().getText()); 
  }
