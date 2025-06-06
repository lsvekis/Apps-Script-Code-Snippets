function numberHeadings() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var n = body.getNumChildren(); 
  var count = 1; 
  for (var i = 0; i < n; i++) { 
    var el = body.getChild(i); 
    if (el.getType() == DocumentApp.ElementType.PARAGRAPH) { 
      var para = el.asParagraph(); 
      if (para.getHeading() !== DocumentApp.ParagraphHeading.NORMAL) { 
        para.setText(count + ". " + para.getText()); 
        count++; 
      }
