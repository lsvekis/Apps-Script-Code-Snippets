function testIndexingPromptOnly() {
  const out = summarizeForKb_("Test Doc", "This is a short test doc about onboarding and policies.");
  Logger.log(out);
}

function testAskAfterIndexing() {
  const msg = askKb("What does the onboarding policy say?");
  Logger.log(msg);
}
