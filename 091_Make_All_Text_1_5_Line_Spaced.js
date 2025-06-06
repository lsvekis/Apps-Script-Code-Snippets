function onePointFiveSpacing() { 
Laurence Svekis Learn More https://basescripts.com/  
  var body = DocumentApp.getActiveDocument().getBody(); 
  for (var i = 0; i < body.getNumChildren(); i++) { 
    var p = body.getChild(i); 
    if (p.getType() == DocumentApp.ElementType.PARAGRAPH) { 
      p.asParagraph().setLineSpacing(1.5); 
    }
