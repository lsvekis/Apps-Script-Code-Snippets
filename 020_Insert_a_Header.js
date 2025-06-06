function insertHeader() { 
  var doc = DocumentApp.getActiveDocument(); 
  doc.addHeader().appendParagraph("Draft Version"); 
}
