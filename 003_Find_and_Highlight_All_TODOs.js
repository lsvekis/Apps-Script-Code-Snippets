function highlightTODOs() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var found = body.findText('TODO'); 
  while (found) { 
    found.getElement().setBackgroundColor('yellow'); 
    found = body.findText('TODO', found); 
  }
