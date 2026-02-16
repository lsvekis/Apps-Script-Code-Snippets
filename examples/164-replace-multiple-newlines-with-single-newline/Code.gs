// 164) Replace multiple newlines with single newline
function ex164_collapseNewlines() {
  const doc=DocumentApp.getActiveDocument();
  const t=doc.getBody().editAsText();
  t.replaceText('\\n{3,}', '\n\n');
}
