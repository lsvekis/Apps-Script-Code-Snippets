function replaceTabsWithSpaces() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var txt = body.getText().replace(/\t/g, '    '); 
  body.setText(txt); 
}
