function processMeetingNotes(docId, context) {
  let notes;
  try {
    notes = getMeetingNotes_(docId);
  } catch (e) {
    return "Doc error: " + e;
  }

  let analysis;
  try {
    analysis = analyzeMeeting_(notes, context);
  } catch (e) {
    Logger.log("Analyze error: " + e);
    return "Gemini analysis error. Check logs (View → Logs).";
  }

  const url = writeActionPlanDoc_(analysis, String(docId).trim());
  return "✅ Action Plan created:\n" + url;
}
