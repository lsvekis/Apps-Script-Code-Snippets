// 145) Find files by partial name
function ex145_searchByName() {
  const q = 'name contains "Report" and trashed=false';
  const it = DriveApp.searchFiles(q);
  let n=0;
  while (it.hasNext() && n<20) { const f=it.next(); Logger.log(f.getName() + ' ' + f.getUrl()); n++; }
}
