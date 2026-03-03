function ex241_shareFolderEditor(folderId, email) {
  DriveApp.getFolderById(folderId).addEditor(email);
}
