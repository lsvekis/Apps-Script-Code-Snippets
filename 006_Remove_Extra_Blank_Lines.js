function removeExtraBlankLines() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var numChildren = body.getNumChildren(); 
  for (var i = numChildren - 1; i > 0; i--) { 
    var curr = body.getChild(i); 
    var prev = body.getChild(i - 1); 
    if (curr.getType() == DocumentApp.ElementType.PARAGRAPH && 
        prev.getType() == DocumentApp.ElementType.PARAGRAPH && 
        !curr.asParagraph().getText() && 
!prev.asParagraph().getText()) { 
      body.removeChild(curr); 
    }
