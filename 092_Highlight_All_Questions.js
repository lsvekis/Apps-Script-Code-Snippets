function highlightQuestions() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var found = body.findText('[^?]+\?', null, 
{useRegularExpression:true}); 
  while (found) { 
    found.getElement().setBackgroundColor('#d9ead3'); 
    found = body.findText('[^?]+\?', found, 
{useRegularExpression:true}); 
  }
