function removeAllComments() { 
  var doc = DocumentApp.getActiveDocument(); 
  var comments = Drive.Comments.list(doc.getId()).items; 
  comments.forEach(function(comment) { 
    Drive.Comments.remove(doc.getId(), comment.commentId); 
  }); 
}
