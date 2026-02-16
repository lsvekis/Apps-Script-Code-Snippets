// 149) Create a Drive “manifest” (name → id) as JSON file
function ex149_createManifestJson() {
  const folderId='PASTE_FOLDER_ID';
  const folder=DriveApp.getFolderById(folderId);
  const it=folder.getFiles();
  const manifest = {};
  while(it.hasNext()){
    const f=it.next();
    manifest[f.getName()] = f.getId();
  }
  const blob = Utilities.newBlob(JSON.stringify(manifest, null, 2), 'application/json', 'manifest.json');
  const file = folder.createFile(blob);
  Logger.log(file.getUrl());
}
