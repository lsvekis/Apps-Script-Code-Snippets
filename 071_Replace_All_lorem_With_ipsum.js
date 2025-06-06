function replaceLoremWithIpsum() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  body.replaceText('lorem', 'ipsum'); 
}
