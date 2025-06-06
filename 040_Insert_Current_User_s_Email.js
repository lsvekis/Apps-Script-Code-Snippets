function insertCurrentUserEmail() { 
  var email = Session.getActiveUser().getEmail(); 
  DocumentApp.getActiveDocument().getBody().appendParagraph(email); 
}
