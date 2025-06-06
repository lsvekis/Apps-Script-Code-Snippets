function addTimestampEnd() { 
  var now = new Date(); 
  var str = Utilities.formatDate(now, Session.getScriptTimeZone(), 
'yyyy-MM-dd HH:mm:ss'); 
  DocumentApp.getActiveDocument().getBody().appendParagraph(str); 
}
