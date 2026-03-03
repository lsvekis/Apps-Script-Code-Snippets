function ex220_prefixFileNames(folderId, prefix) {
  const folder = DriveApp.getFolderById(folderId);
  const it = folder.getFiles();
  while (it.hasNext()) {
    const f = it.next();
    if (!f.getName().startsWith(prefix)) f.setName(prefix + f.getName());
  }
}
