function breakAfterSentences() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var text = body.getText().replace(/([.?!])\s/g, '$1\n'); 
  body.setText(text); 
}
