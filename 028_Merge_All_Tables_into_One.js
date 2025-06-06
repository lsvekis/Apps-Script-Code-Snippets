function mergeAllTables() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var tables = []; 
  for (var i = 0; i < body.getNumChildren(); i++) { 
    if (body.getChild(i).getType() == DocumentApp.ElementType.TABLE) { 
      tables.push(body.getChild(i).asTable()); 
    }
