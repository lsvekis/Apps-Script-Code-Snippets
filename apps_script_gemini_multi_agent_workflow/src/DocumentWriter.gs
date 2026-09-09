function createFinalReport_(userRequest,sourceData,report,review){
  const doc=DocumentApp.create("AI Multi-Agent Report");
  const body=doc.getBody();
  body.appendParagraph("AI Multi-Agent Report").setHeading(DocumentApp.ParagraphHeading.TITLE);
  body.appendParagraph("Generated: "+new Date());
  body.appendParagraph("Source Sheet: "+sourceData.sheetName);
  body.appendParagraph("Rows Analyzed: "+sourceData.rowsRead+" of "+sourceData.totalRows);
  body.appendParagraph("Objective").setHeading(DocumentApp.ParagraphHeading.HEADING2);
  body.appendParagraph(userRequest);
  body.appendParagraph("Final Report").setHeading(DocumentApp.ParagraphHeading.HEADING2);
  appendMarkdownLikeReport_(body,report);
  body.appendParagraph("Quality Review").setHeading(DocumentApp.ParagraphHeading.HEADING2);
  body.appendParagraph("Status: "+review.status);
  body.appendParagraph("Score: "+review.score+"/100");
  if(review.issues&&review.issues.length){body.appendParagraph("Review Notes").setHeading(DocumentApp.ParagraphHeading.HEADING3);review.issues.forEach(i=>body.appendListItem(String(i)));}
  return {documentId:doc.getId(),documentUrl:doc.getUrl()};
}
function appendMarkdownLikeReport_(body,report){
  String(report||"").split("\n").forEach(function(line){const t=line.trim();if(!t){body.appendParagraph("");}else if(t.indexOf("### ")===0){body.appendParagraph(t.substring(4)).setHeading(DocumentApp.ParagraphHeading.HEADING3);}else if(t.indexOf("## ")===0){body.appendParagraph(t.substring(3)).setHeading(DocumentApp.ParagraphHeading.HEADING2);}else if(t.indexOf("# ")===0){body.appendParagraph(t.substring(2)).setHeading(DocumentApp.ParagraphHeading.HEADING1);}else if(t.indexOf("- ")===0){body.appendListItem(t.substring(2));}else{body.appendParagraph(t);}});
}
