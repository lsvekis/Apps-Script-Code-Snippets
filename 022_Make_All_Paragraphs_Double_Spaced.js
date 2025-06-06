function doubleSpaceParagraphs() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var n = body.getNumChildren(); 
  for (var i = 0; i < n; i++) { 
    var p = body.getChild(i); 
    if (p.getType() == DocumentApp.ElementType.PARAGRAPH) { 
      p.asParagraph().setLineSpacing(2); 
    }
