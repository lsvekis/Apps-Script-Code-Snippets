function testLoadLatestThread() {
  const data = getLatestThreadText_("in:inbox newer_than:7d");
  Logger.log(data);
}

function testDraftReplyEndToEnd() {
  const msg = draftReply("in:inbox newer_than:7d", "Professional", "");
  Logger.log(msg);
}
