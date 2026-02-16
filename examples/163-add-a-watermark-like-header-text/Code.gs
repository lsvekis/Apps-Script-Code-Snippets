// 163) Add a watermark-like header text
function ex163_addHeaderText() {
  const doc=DocumentApp.getActiveDocument();
  const header=doc.addHeader();
  header.appendParagraph('DRAFT').setBold(true);
}
