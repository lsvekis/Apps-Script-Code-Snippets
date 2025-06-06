function removeAllStrikethrough() { 
  var text = DocumentApp.getActiveDocument().getBody().editAsText(); 
  text.setStrikethrough(false); 
}
