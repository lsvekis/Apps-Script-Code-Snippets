// 146) Create a text file in a folder
function ex146_createTextFile() {
  const folderId='PASTE_FOLDER_ID';
  const folder=DriveApp.getFolderById(folderId);
  const file=folder.createFile('notes.txt','Hello world','text/plain');
  Logger.log(file.getUrl());
}
