// 158) Create a shared “handoff” folder structure
function ex158_createHandoffStructure() {
  const root = DriveApp.createFolder('Handoff ' + Date.now());
  ['01-Docs','02-Assets','03-Exports','04-Archive'].forEach(n => root.createFolder(n));
  Logger.log(root.getUrl());
}
