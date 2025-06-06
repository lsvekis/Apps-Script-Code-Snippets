function emailAsPDF() { 
  var doc = DocumentApp.getActiveDocument(); 
  var file = DriveApp.getFileById(doc.getId()); 
  var pdf = file.getAs('application/pdf'); 
  MailApp.sendEmail('your@email.com', 'Document PDF', 'See attached.', 
{attachments:[pdf]}); 
}
