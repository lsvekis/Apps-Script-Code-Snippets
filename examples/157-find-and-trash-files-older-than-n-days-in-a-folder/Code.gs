// 157) Find and trash files older than N days in a folder
function ex157_trashOldInFolder() {
  const folderId='PASTE_FOLDER_ID', days=90;
  const cutoff=Date.now() - days*24*3600*1000;
  const folder=DriveApp.getFolderById(folderId);
  const it=folder.getFiles();
  while(it.hasNext()){
    const f=it.next();
    if(f.getLastUpdated().getTime() < cutoff) f.setTrashed(true);
  }
}
