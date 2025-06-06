function logParagraphStyles() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  for (var i = 0; i < body.getNumChildren(); i++) { 
    var p = body.getChild(i); 
    if (p.getType() == DocumentApp.ElementType.PARAGRAPH) { 
      Logger.log(p.asParagraph().getHeading()); 
    }
