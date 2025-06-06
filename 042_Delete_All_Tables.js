function deleteAllTables() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  for (var i = body.getNumChildren() - 1; i >= 0; i--) { 
    if (body.getChild(i).getType() == DocumentApp.ElementType.TABLE) { 
      body.removeChild(body.getChild(i)); 
    }
