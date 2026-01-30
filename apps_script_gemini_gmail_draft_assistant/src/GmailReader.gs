function getLatestThreadText_(query) {
  const threads = GmailApp.search(query || "in:inbox", 0, 1);
  if (!threads.length) throw new Error("No threads matched your query.");

  const messages = threads[0].getMessages();
  const last = messages[messages.length - 1];

  const from = last.getFrom();
  const subject = last.getSubject();
  const date = last.getDate();

  const body = stripQuotedText_(last.getPlainBody()).slice(0, 8000);

  return { from, subject, date: String(date), body };
}

function stripQuotedText_(text) {
  const separators = [
    "\nOn ", "\nFrom:", "\nSent:", "\n-----Original Message-----"
  ];

  let cut = text.length;
  separators.forEach(sep => {
    const idx = text.indexOf(sep);
    if (idx !== -1 && idx < cut) cut = idx;
  });

  return text.substring(0, cut).trim();
}
