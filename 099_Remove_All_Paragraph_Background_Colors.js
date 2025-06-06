function clearAllBackgroundColors() { 
Laurence Svekis Learn More https://basescripts.com/  
  var body = DocumentApp.getActiveDocument().getBody(); 
  for (var i = 0; i < body.getNumChildren(); i++) { 
    var para = body.getChild(i); 
    if (para.getType() == DocumentApp.ElementType.PARAGRAPH) { 
      para.asParagraph().setBackgroundColor(null); 
    }
