// 173) Convert a Google Doc to HTML string (simple)
function ex173_docToHtmlSimple() {
  const doc=DocumentApp.getActiveDocument();
  const html = doc.getBody().getText().split('\n').map(p=>`<p>${p}</p>`).join('');
  Logger.log(html);
}
