function duplicateActiveDoc() { 
  var doc = DocumentApp.getActiveDocument(); 
  DriveApp.getFileById(doc.getId()).makeCopy('Copy of ' + 
doc.getName()); 
}
