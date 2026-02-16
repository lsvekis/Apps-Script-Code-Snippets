// 154) List recent files (last 7 days) across Drive
function ex154_recentFiles() {
  const cutoff = new Date(Date.now() - 7*24*3600*1000);
  const it = DriveApp.searchFiles('trashed=false');
  let n=0;
  while(it.hasNext() && n<50){
    const f=it.next();
    if (f.getLastUpdated() >= cutoff) Logger.log(f.getLastUpdated() + ' ' + f.getName());
    n++;
  }
}
