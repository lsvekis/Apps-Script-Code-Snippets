// 176) Convert selected text to bullet list
function ex176_selectionToBullets() {
  const doc=DocumentApp.getActiveDocument();
  const sel=doc.getSelection();
  if(!sel) return;
  sel.getRangeElements().forEach(re=>{
    const el=re.getElement();
    if(el.editAsText) {
      const p = el.getParent();
      if (p && p.asParagraph) p.asParagraph().setBullet(true);
    }
  });
}
