// 150) Zip files in a folder and save the zip
function ex150_zipFolderFiles() {
  const folderId='PASTE_FOLDER_ID';
  const folder=DriveApp.getFolderById(folderId);
  const it=folder.getFiles();
  const blobs=[];
  while(it.hasNext()){
    const f=it.next();
    blobs.push(f.getBlob().setName(f.getName()));
  }
  const zipBlob = Utilities.zip(blobs, 'bundle.zip');
  const zipFile = folder.createFile(zipBlob);
  Logger.log(zipFile.getUrl());
}
