function insertBlankPage() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  body.appendPageBreak(); 
}
