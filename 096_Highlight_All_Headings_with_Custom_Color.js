function highlightHeadingsColor() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  for (var i = 0; i < body.getNumChildren(); i++) { 
    var para = body.getChild(i); 
    if (para.getType() == DocumentApp.ElementType.PARAGRAPH && 
        para.asParagraph().getHeading() !== 
DocumentApp.ParagraphHeading.NORMAL) { 
Laurence Svekis Learn More https://basescripts.com/  
      para.asParagraph().setBackgroundColor('#b6d7a8'); 
    }
