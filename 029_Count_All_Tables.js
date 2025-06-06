function countTables() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var count = 0; 
Laurence Svekis Learn More https://basescripts.com/  
  for (var i = 0; i < body.getNumChildren(); i++) { 
    if (body.getChild(i).getType() == DocumentApp.ElementType.TABLE) 
count++; 
  }
