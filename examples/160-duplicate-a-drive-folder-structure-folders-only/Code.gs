// 160) Duplicate a Drive folder structure (folders only)
function ex160_cloneFolderStructureOnly() {
  const sourceId='PASTE_SOURCE_FOLDER_ID';
  const targetParentId='PASTE_TARGET_PARENT_FOLDER_ID';
  const src=DriveApp.getFolderById(sourceId);
  const parent=DriveApp.getFolderById(targetParentId);
  const dst=parent.createFolder(src.getName() + ' (Structure)');
  cloneFoldersOnly_(src, dst);
}
function cloneFoldersOnly_(src, dst){
  const subs=src.getFolders();
  while(subs.hasNext()){
    const sub=subs.next();
    const newSub=dst.createFolder(sub.getName());
    cloneFoldersOnly_(sub, newSub);
  }
}

/***********************
  161–180: Docs + Slides (document generation)
************************/
