function lineAfterEachTable() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  for (var i = body.getNumChildren() - 1; i >= 0; i--) { 
    var el = body.getChild(i); 
    if (el.getType() == DocumentApp.ElementType.TABLE) { 
      body.insertHorizontalRule(i + 1); 
    }
