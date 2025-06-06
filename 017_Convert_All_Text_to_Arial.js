function convertAllTextToArial() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  body.editAsText().setFontFamily('Arial'); 
}
