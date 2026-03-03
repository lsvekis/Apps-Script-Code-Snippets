function ex222_replacePlaceholdersInActiveDoc() {
  const doc = DocumentApp.getActiveDocument();
  const body = doc.getBody();
  body.replaceText('{{DATE}}', new Date().toDateString());
  body.replaceText('{{NAME}}', Session.getActiveUser().getEmail());
  doc.saveAndClose();
}
