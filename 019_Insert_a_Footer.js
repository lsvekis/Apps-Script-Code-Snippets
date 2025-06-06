function insertFooter() { 
  var doc = DocumentApp.getActiveDocument(); 
  doc.addFooter().appendParagraph("Confidential"); 
}
