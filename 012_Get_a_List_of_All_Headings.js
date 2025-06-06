function listAllHeadings() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var numChildren = body.getNumChildren(); 
  for (var i = 0; i < numChildren; i++) { 
    var elem = body.getChild(i); 
    if (elem.getType() == DocumentApp.ElementType.PARAGRAPH) { 
      var para = elem.asParagraph(); 
      if (para.getHeading() !== DocumentApp.ParagraphHeading.NORMAL) { 
        Logger.log(para.getText()); 
      }
