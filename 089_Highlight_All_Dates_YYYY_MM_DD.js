function highlightDates() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var found = body.findText('\\b\\d{4}-\\d{2}-\\d{2}\\b', null, 
{useRegularExpression:true}); 
  while (found) { 
    found.getElement().setBackgroundColor('#fce5cd'); 
    found = body.findText('\\b\\d{4}-\\d{2}-\\d{2}\\b', found, 
{useRegularExpression:true}); 
  }
