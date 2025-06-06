function listAllLinks() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var text = body.getText(); 
  var matches = text.match(/https?:\/\/[^\s]+/g); 
  if (matches) Logger.log(matches.join('\n')); 
}
