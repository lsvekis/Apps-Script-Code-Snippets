function paragraphsWithNumber() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
Laurence Svekis Learn More https://basescripts.com/  
  for (var i = 0; i < body.getNumChildren(); i++) { 
    var p = body.getChild(i); 
    if (p.getType() == DocumentApp.ElementType.PARAGRAPH) { 
      var txt = p.asParagraph().getText(); 
      if (/\d/.test(txt)) Logger.log(txt); 
    }
