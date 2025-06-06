function boldAllNumbers() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var found = body.findText('\\d+', null, {useRegularExpression: 
true}); 
  while (found) { 
    found.getElement().setBold(true); 
    found = body.findText('\\d+', found, {useRegularExpression: 
true}); 
  }
