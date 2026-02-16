// 143) Copy a file to another folder
function ex143_copyFileToFolder() {
  const fileId = 'PASTE_FILE_ID';
  const folderId = 'PASTE_FOLDER_ID';
  const copy = DriveApp.getFileById(fileId).makeCopy(DriveApp.getFolderById(folderId));
  Logger.log(copy.getUrl());
}
