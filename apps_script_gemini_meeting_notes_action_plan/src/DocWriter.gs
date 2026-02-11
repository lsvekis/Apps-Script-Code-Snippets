function writeActionPlanDoc_(analysis, sourceDocId) {
  const sourceDoc = DocumentApp.openById(sourceDocId);
  const title = sourceDoc.getName();

  const doc = DocumentApp.create("Action Plan — " + title);
  const body = doc.getBody();

  body.appendParagraph("Meeting Summary")
      .setHeading(DocumentApp.ParagraphHeading.HEADING1);
  body.appendParagraph(analysis.summary || "(no summary returned)");

  body.appendParagraph("Decisions")
      .setHeading(DocumentApp.ParagraphHeading.HEADING1);
  (analysis.decisions || []).forEach(d => body.appendListItem(String(d)));

  body.appendParagraph("Action Items")
      .setHeading(DocumentApp.ParagraphHeading.HEADING1);
  (analysis.actionItems || []).forEach(a => {
    const task = a && a.task ? a.task : "unknown";
    const owner = a && a.owner ? a.owner : "unknown";
    const due = a && a.due ? a.due : "unknown";
    body.appendListItem(`${task} (Owner: ${owner}, Due: ${due})`);
  });

  body.appendParagraph("Open Questions")
      .setHeading(DocumentApp.ParagraphHeading.HEADING1);
  (analysis.openQuestions || []).forEach(q => body.appendListItem(String(q)));

  body.appendParagraph("Risks")
      .setHeading(DocumentApp.ParagraphHeading.HEADING1);
  (analysis.risks || []).forEach(r => body.appendListItem(String(r)));

  return doc.getUrl();
}
