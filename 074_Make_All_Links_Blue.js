function setAllLinksBlue() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var found = body.findText('https?://[^\s]+', null, 
{useRegularExpression:true}); 
  while (found) { 
    found.getElement().setForegroundColor('blue'); 
    found = body.findText('https?://[^\s]+', found, 
{useRegularExpression:true}); 
  }
