function toSentenceCase() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var text = 
body.getText().toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, 
function(c){return c.toUpperCase()}); 
  body.setText(text); 
}
