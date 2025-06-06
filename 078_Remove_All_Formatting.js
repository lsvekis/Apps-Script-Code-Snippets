function removeAllFormatting() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var text = body.getText(); 
  body.setText(text); // Removes all formatting 
}
