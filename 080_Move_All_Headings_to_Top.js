function moveHeadingsToTop() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var headings = []; 
Laurence Svekis Learn More https://basescripts.com/  
  for (var i = body.getNumChildren() - 1; i >= 0; i--) { 
    var para = body.getChild(i); 
    if (para.getType() == DocumentApp.ElementType.PARAGRAPH && 
        para.asParagraph().getHeading() !== 
DocumentApp.ParagraphHeading.NORMAL) { 
      headings.unshift(para.asParagraph().getText()); 
      body.removeChild(para); 
    }
