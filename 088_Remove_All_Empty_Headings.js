function removeEmptyHeadings() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  for (var i = body.getNumChildren() - 1; i >= 0; i--) { 
    var para = body.getChild(i); 
    if (para.getType() == DocumentApp.ElementType.PARAGRAPH && 
        para.asParagraph().getHeading() !== 
DocumentApp.ParagraphHeading.NORMAL && 
        !para.asParagraph().getText().trim()) { 
      body.removeChild(para); 
Laurence Svekis Learn More https://basescripts.com/  
    }
