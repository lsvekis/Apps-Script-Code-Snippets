function randomizeParagraphs() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var paras = []; 
  for (var i = 0; i < body.getNumChildren(); i++) { 
    var el = body.getChild(i); 
    if (el.getType() == DocumentApp.ElementType.PARAGRAPH) { 
      paras.push(el.asParagraph().copy()); 
    }
