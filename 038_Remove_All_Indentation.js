function removeAllIndentation() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var n = body.getNumChildren(); 
  for (var i = 0; i < n; i++) { 
    var para = body.getChild(i); 
    if (para.getType() == DocumentApp.ElementType.PARAGRAPH) { 
      para.asParagraph().setIndentStart(0); 
    }
