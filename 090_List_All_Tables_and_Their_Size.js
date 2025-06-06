function logTableSizes() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  for (var i = 0; i < body.getNumChildren(); i++) { 
    if (body.getChild(i).getType() == DocumentApp.ElementType.TABLE) { 
      var table = body.getChild(i).asTable(); 
      Logger.log('Table at index ' + i + ': ' + table.getNumRows() + ' 
rows x ' + table.getRow(0).getNumCells() + ' cols'); 
    }
