function logDocCreationDate() { 
  var doc = DocumentApp.getActiveDocument(); 
  var file = DriveApp.getFileById(doc.getId()); 
  Logger.log(file.getDateCreated()); 
}
