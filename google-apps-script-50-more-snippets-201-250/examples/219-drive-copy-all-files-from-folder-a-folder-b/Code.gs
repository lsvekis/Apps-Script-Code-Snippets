function ex219_copyFolderFiles(sourceFolderId, targetFolderId) {
  const src = DriveApp.getFolderById(sourceFolderId);
  const dst = DriveApp.getFolderById(targetFolderId);
  const it = src.getFiles();
  while (it.hasNext()) it.next().makeCopy(dst);
}
