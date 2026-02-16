// 147) Update a text file’s contents
function ex147_overwriteTextFile() {
  const fileId='PASTE_FILE_ID';
  const file=DriveApp.getFileById(fileId);
  file.setContent('Updated at ' + new Date());
}
