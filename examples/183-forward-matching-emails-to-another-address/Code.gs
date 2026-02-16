// 183) Forward matching emails to another address
function ex183_forwardEmails() {
  const threads=GmailApp.search('subject:"Action Required" newer_than:7d',0,10);
  threads.forEach(t=>t.getMessages().pop().forward('someone@example.com'));
}
