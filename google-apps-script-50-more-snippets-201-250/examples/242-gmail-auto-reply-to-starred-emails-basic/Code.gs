function ex242_replyToStarred() {
  const threads = GmailApp.search('is:starred in:inbox', 0, 10);
  threads.forEach(t => {
    const msg = t.getMessages().pop();
    msg.reply('Thanks — I saw this and will follow up soon.');
    t.unstar();
  });
}
