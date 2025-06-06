function listBookmarks() { 
  var doc = DocumentApp.getActiveDocument(); 
  var bookmarks = doc.getBookmarks(); 
  bookmarks.forEach(function(bm, i) { 
    Logger.log('Bookmark ' + (i+1) + ': ' + bm.getId()); 
  }); 
}
