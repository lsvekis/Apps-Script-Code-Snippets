function listUniqueWords() { 
  var text = DocumentApp.getActiveDocument().getBody().getText(); 
  var words = text.match(/\b\w+\b/g); 
  var unique = Array.from(new Set(words)); 
  Logger.log(unique.join(', ')); 
}
