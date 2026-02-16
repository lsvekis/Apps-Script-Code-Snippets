// 151) Delete empty folders (one level deep)
function ex151_deleteEmptySubfolders() {
  const rootId='PASTE_FOLDER_ID';
  const root=DriveApp.getFolderById(rootId);
  const subs=root.getFolders();
  while(subs.hasNext()){
    const f=subs.next();
    if(!f.getFiles().hasNext() && !f.getFolders().hasNext()){
      f.setTrashed(true);
    }
  }
}
