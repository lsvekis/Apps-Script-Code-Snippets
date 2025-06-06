function highlightEmails() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var found = 
body.findText('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,}', null, 
{useRegularExpression:true}); 
  while (found) { 
    found.getElement().setBackgroundColor('lightblue'); 
    found = 
body.findText('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,}', found, 
{useRegularExpression:true}); 
  }
