function replaceWord(oldWord, newWord) { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  body.replaceText(oldWord, newWord); 
}
