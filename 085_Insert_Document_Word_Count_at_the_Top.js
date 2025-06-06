function insertWordCountAtTop() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var count = body.getText().match(/\b\S+\b/g)?.length || 0; 
  body.insertParagraph(0, 'Word Count: ' + count); 
}
