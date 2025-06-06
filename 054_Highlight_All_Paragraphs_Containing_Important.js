function highlightImportant() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var n = body.getNumChildren(); 
  for (var i = 0; i < n; i++) { 
    var el = body.getChild(i); 
    if (el.getType() == DocumentApp.ElementType.PARAGRAPH) { 
      if (el.asParagraph().getText().match(/important/i)) { 
        el.asParagraph().setBackgroundColor('pink'); 
      }
