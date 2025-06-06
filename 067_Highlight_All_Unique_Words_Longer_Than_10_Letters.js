function highlightLongUniqueWords() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
Laurence Svekis Learn More https://basescripts.com/  
  var text = body.getText(); 
  var longWords = Array.from(new Set(text.match(/\b\w{11,}\b/g) || 
[])); 
  longWords.forEach(function(word) { 
    var found = body.findText('\\b'+word+'\\b'); 
    while (found) { 
      found.getElement().setBackgroundColor('#d9ead3'); 
      found = body.findText('\\b'+word+'\\b', found); 
    }
