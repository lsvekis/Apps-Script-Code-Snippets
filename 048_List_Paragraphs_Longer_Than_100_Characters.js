function longParagraphs() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var n = body.getNumChildren(); 
  for (var i = 0; i < n; i++) { 
    var el = body.getChild(i); 
    if (el.getType() == DocumentApp.ElementType.PARAGRAPH) { 
      var txt = el.asParagraph().getText(); 
      if (txt.length > 100) Logger.log(txt); 
    }
