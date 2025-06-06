function highlightPalindromes() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var text = body.getText(); 
  var words = text.match(/\b\w+\b/g) || []; 
  words.forEach(function(word) { 
    if (word.length > 2 && word === word.split('').reverse().join('')) 
{ 
      var found = body.findText('\\b' + word + '\\b'); 
      while (found) { 
        found.getElement().setBackgroundColor('#d9ead3'); 
        found = body.findText('\\b' + word + '\\b', found); 
      }
