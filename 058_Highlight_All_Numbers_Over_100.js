function highlightLargeNumbers() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var found = body.findText('\\b\\d{3,}\\b', null, 
{useRegularExpression:true}); 
  while (found) { 
    found.getElement().setBackgroundColor('#f4cccc'); 
    found = body.findText('\\b\\d{3,}\\b', found, 
{useRegularExpression:true}); 
  }
