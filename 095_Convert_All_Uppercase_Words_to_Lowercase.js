function uppercaseToLowercase() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var text = body.getText().replace(/\b[A-Z]{2,}\b/g, 
function(w){return w.toLowerCase();}); 
  body.setText(text); 
}
