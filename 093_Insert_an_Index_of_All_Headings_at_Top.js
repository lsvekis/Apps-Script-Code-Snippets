function insertHeadingsIndex() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var headings = []; 
  for (var i = 0; i < body.getNumChildren(); i++) { 
    var para = body.getChild(i); 
    if (para.getType() == DocumentApp.ElementType.PARAGRAPH && 
        para.asParagraph().getHeading() !== 
DocumentApp.ParagraphHeading.NORMAL) { 
      headings.push(para.asParagraph().getText()); 
    }
