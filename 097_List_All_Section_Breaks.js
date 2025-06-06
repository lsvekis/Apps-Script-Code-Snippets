function logSectionBreaks() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  for (var i = 0; i < body.getNumChildren(); i++) { 
    var el = body.getChild(i); 
    if (el.getType() == DocumentApp.ElementType.SECTION_BREAK) { 
      Logger.log('Section break at index ' + i); 
    }
