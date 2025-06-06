function addHyperlinkToSelection(url) { 
  var selection = DocumentApp.getActiveDocument().getSelection(); 
  if (selection) { 
    var elements = selection.getRangeElements(); 
    elements.forEach(function(el) { 
      var elem = el.getElement().asText(); 
      elem.setLinkUrl(el.getStartOffset(), el.getEndOffsetInclusive(), 
url); 
Laurence Svekis Learn More https://basescripts.com/  
    }); 
  }
