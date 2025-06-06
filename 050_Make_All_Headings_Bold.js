function makeHeadingsBold() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var n = body.getNumChildren(); 
  for (var i = 0; i < n; i++) { 
    var el = body.getChild(i); 
    if (el.getType() == DocumentApp.ElementType.PARAGRAPH) { 
      var para = el.asParagraph(); 
      if (para.getHeading() !== DocumentApp.ParagraphHeading.NORMAL) { 
        para.setBold(true); 
      }
