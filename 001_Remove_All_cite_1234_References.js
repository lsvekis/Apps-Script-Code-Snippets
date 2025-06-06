function removeCiteReferences() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var pattern = /\[cite:\s*\d+\]/g; 
  var text = body.getText(); 
  var cleanedText = text.replace(pattern, ''); 
  body.setText(cleanedText); 
}
