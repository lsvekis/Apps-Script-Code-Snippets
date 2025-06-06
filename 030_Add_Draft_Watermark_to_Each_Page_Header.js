function draftHeader() { 
  var doc = DocumentApp.getActiveDocument(); 
  doc.addHeader().appendParagraph("DRAFT"); 
}
