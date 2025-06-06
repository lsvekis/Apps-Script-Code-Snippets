function removeBookmarks() { 
  var doc = DocumentApp.getActiveDocument(); 
  doc.getBookmarks().forEach(function(bm) { bm.remove(); }); 
}
