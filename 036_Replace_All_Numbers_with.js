function replaceAllNumbers() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  body.setText(body.getText().replace(/\d+/g, '#')); 
}
