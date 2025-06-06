function setAllTextBlack() { 
  var body = DocumentApp.getActiveDocument().getBody().editAsText(); 
  body.setForegroundColor('black'); 
}
