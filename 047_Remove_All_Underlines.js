function removeAllUnderlines() { 
  var text = DocumentApp.getActiveDocument().getBody().editAsText(); 
  text.setUnderline(false); 
}
