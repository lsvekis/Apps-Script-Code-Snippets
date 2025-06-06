function insertCurrentDate() { 
  var cursor = DocumentApp.getActiveDocument().getCursor(); 
  if (cursor) { 
    var dateStr = Utilities.formatDate(new Date(), 
Session.getScriptTimeZone(), "yyyy-MM-dd"); 
    cursor.insertText(dateStr); 
  } else { 
    DocumentApp.getUi().alert('Place your cursor in the document 
first.'); 
  }
