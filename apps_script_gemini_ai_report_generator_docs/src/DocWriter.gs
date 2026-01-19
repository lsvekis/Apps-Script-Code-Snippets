function writeReportToDoc_(report) {
  const title = report.title || "AI Generated Report";
  const doc = DocumentApp.create(title);
  const body = doc.getBody();

  body.appendParagraph(title)
      .setHeading(DocumentApp.ParagraphHeading.TITLE);

  if (report.summary) {
    body.appendParagraph("Executive Summary")
        .setHeading(DocumentApp.ParagraphHeading.HEADING1);
    body.appendParagraph(report.summary);
  }

  const sections = report.sections || [];
  sections.forEach(sec => {
    if (sec.heading) {
      body.appendParagraph(sec.heading)
          .setHeading(DocumentApp.ParagraphHeading.HEADING2);
    }
    if (sec.content) {
      body.appendParagraph(sec.content);
    }
    const bullets = sec.bullets || [];
    bullets.forEach(b => {
      body.appendListItem(String(b)).setGlyphType(DocumentApp.GlyphType.BULLET);
    });
  });

  if (report.risks && report.risks.length) {
    body.appendParagraph("Risks / Caveats")
        .setHeading(DocumentApp.ParagraphHeading.HEADING2);
    report.risks.forEach(r => {
      body.appendListItem(String(r)).setGlyphType(DocumentApp.GlyphType.BULLET);
    });
  }

  if (report.nextSteps && report.nextSteps.length) {
    body.appendParagraph("Recommended Next Steps")
        .setHeading(DocumentApp.ParagraphHeading.HEADING2);
    report.nextSteps.forEach(s => {
      body.appendListItem(String(s)).setGlyphType(DocumentApp.GlyphType.BULLET);
    });
  }

  return doc.getUrl();
}
