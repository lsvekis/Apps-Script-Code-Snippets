function italicizeQuotes() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var found = body.findText('"[^"]+"', null, 
{useRegularExpression:true}); 
  while (found) { 
    found.getElement().setItalic(true); 
    found = body.findText('"[^"]+"', found, 
{useRegularExpression:true}); 
  }
