function findNotes() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  for (var i = 0; i < body.getNumChildren(); i++) { 
    var para = body.getChild(i); 
    if (para.getType() == DocumentApp.ElementType.PARAGRAPH) { 
      var text = para.asParagraph().getText(); 
      if (/^Note:/i.test(text)) Logger.log(text); 
    }
