// 141) Create a folder and return URL
function ex141_createFolder() {
  const f = DriveApp.createFolder('New Folder ' + Date.now());
  Logger.log(f.getUrl());
}
