function boldProperNouns() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var found = body.findText('\\b[A-Z][a-z]+\\b', null, 
{useRegularExpression:true}); 
  while (found) { 
    found.getElement().setBold(true); 
    found = body.findText('\\b[A-Z][a-z]+\\b', found, 
{useRegularExpression:true}); 
  }
