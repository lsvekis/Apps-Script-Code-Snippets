// 152) Rename all files by replacing substring
function ex152_renameReplace() {
  const folderId='PASTE_FOLDER_ID';
  const folder=DriveApp.getFolderById(folderId);
  const it=folder.getFiles();
  while(it.hasNext()){
    const f=it.next();
    f.setName(f.getName().replace('Draft','Final'));
  }
}
