function ex248_findDuplicateNamesInFolder() {
  const folderId = 'PASTE_FOLDER_ID';
  const folder = DriveApp.getFolderById(folderId);
  const it = folder.getFiles();
  const counts = {};
  while (it.hasNext()) {
    const name = it.next().getName();
    counts[name] = (counts[name] || 0) + 1;
  }
  Object.entries(counts).filter(([,c]) => c > 1).forEach(([n,c]) => Logger.log(`${n} x${c}`));
}
