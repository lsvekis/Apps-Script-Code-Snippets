function removeAllHyperlinks() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var search = body.findText('https?://[^\s]+', null, {matchCase: 
false, wholeWord: false, useRegularExpression: true}); 
  while (search) { 
    search.getElement().setLinkUrl(null); 
    search = body.findText('https?://[^\s]+', search, 
{useRegularExpression: true}); 
  }
