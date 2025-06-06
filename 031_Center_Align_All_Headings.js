function centerAlignHeadings() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var n = body.getNumChildren(); 
  for (var i = 0; i < n; i++) { 
    var elem = body.getChild(i); 
    if (elem.getType() == DocumentApp.ElementType.PARAGRAPH) { 
      var para = elem.asParagraph(); 
      if (para.getHeading() !== DocumentApp.ParagraphHeading.NORMAL) { 
        para.setAlignment(DocumentApp.HorizontalAlignment.CENTER); 
      }
