// 182) Mark matching emails as read
function ex182_markRead() {
  const threads=GmailApp.search('in:inbox subject:"Weekly Report"',0,50);
  threads.forEach(t=>t.markRead());
}
