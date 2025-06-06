function countWords() { 
  var text = DocumentApp.getActiveDocument().getBody().getText(); 
  var wordCount = text.match(/\b\S+\b/g)?.length || 0; 
  Logger.log('Total words: ' + wordCount); 
}
