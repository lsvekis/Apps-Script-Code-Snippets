function highlightCapWords() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var found = body.findText('\\b[A-Z][A-Z]+\\b', null, 
{useRegularExpression:true}); 
  while (found) { 
    found.getElement().setBackgroundColor('#f4cccc'); 
    found = body.findText('\\b[A-Z][A-Z]+\\b', found, 
{useRegularExpression:true}); 
  }
