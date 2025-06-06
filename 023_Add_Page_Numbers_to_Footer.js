function addPageNumbersToFooter() { 
  var doc = DocumentApp.getActiveDocument(); 
  var footer = doc.addFooter(); 
  footer.appendPageNumber(); 
}
