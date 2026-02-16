// 142) List files in a folder (names)
function ex142_listFilesInFolder() {
  const folderId = 'PASTE_FOLDER_ID';
  const folder = DriveApp.getFolderById(folderId);
  const it = folder.getFiles();
  while (it.hasNext()) Logger.log(it.next().getName());
}
