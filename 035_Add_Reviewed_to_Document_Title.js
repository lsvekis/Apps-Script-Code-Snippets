function markReviewedInTitle() { 
  var doc = DocumentApp.getActiveDocument(); 
  doc.setName(doc.getName() + ' (Reviewed)'); 
}
