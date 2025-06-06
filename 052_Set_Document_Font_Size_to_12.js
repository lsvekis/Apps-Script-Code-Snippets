function setFontSize12() { 
  var text = DocumentApp.getActiveDocument().getBody().editAsText(); 
  text.setFontSize(12); 
}
