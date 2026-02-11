function testAnalyzeMeetingJsonOnly() {
  const notes = "Decision: ship v2 next Friday.\nAction: Sam to update docs by Tuesday.\nRisk: timeline is tight.";
  const analysis = analyzeMeeting_(notes, "Project: v2 release planning");
  Logger.log(analysis);
}

function testEndToEndWithDocId() {
  // Replace with a real meeting-notes Doc ID before running.
  const docId = "PASTE_DOC_ID_HERE";
  const msg = processMeetingNotes(docId, "Weekly sync");
  Logger.log(msg);
}
