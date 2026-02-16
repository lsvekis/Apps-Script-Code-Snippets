// 144) Move a file to another folder
function ex144_moveFileToFolder() {
  const fileId = 'PASTE_FILE_ID';
  const folderId = 'PASTE_FOLDER_ID';
  const file = DriveApp.getFileById(fileId);
  const target = DriveApp.getFolderById(folderId);
  const parents = file.getParents();
  target.addFile(file);
  while (parents.hasNext()) parents.next().removeFile(file);
}
