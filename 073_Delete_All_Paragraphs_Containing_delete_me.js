function deleteParagraphsWithDeleteMe() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  for (var i = body.getNumChildren() - 1; i >= 0; i--) { 
    var para = body.getChild(i); 
    if (para.getType() == DocumentApp.ElementType.PARAGRAPH) { 
      if (/delete me/i.test(para.asParagraph().getText())) 
        body.removeChild(para); 
    }
