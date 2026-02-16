// 165) Remove all images from a doc
function ex165_removeImages() {
  const body=DocumentApp.getActiveDocument().getBody();
  const n=body.getNumChildren();
  for(let i=n-1;i>=0;i--){
    const el=body.getChild(i);
    if (el.getType() === DocumentApp.ElementType.INLINE_IMAGE) el.removeFromParent();
  }
}
