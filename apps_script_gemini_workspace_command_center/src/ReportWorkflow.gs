function executeReportWorkflow_(command,id){
 const d=readActiveSheet_(),r=runResearchAgent_(command,d);
 logWorkflowStep_(id,"RESEARCH","Completed");
 const a=runAnalysisAgent_(command,r);logWorkflowStep_(id,"ANALYSIS","Completed");
 let report=runReportAgent_(command,r,a);logWorkflowStep_(id,"REPORT","Completed");
 let review=runReviewAgent_(r,a,report);logWorkflowStep_(id,"REVIEW",review.status+" "+review.score+"/100");
 if(review.status==="REVISE"){
  report=reviseReport_(report,review,r,a);logWorkflowStep_(id,"REVISION","Completed");
  review=runReviewAgent_(r,a,report);logWorkflowStep_(id,"FINAL_REVIEW",review.status+" "+review.score+"/100");
 }
 const doc=createReport_(command,d,report,review);
 return {type:"REPORT",review:review,documentUrl:doc.documentUrl};
}
function createReport_(command,d,report,review){
 const doc=DocumentApp.create("AI Workspace Report"),b=doc.getBody();
 b.appendParagraph("AI Workspace Report").setHeading(DocumentApp.ParagraphHeading.TITLE);
 b.appendParagraph("Source: "+d.sheetName+" | Rows analyzed: "+d.rowsRead+" of "+d.totalRows);
 b.appendParagraph("Objective").setHeading(DocumentApp.ParagraphHeading.HEADING2);b.appendParagraph(command);
 b.appendParagraph("Report").setHeading(DocumentApp.ParagraphHeading.HEADING2);b.appendParagraph(report);
 b.appendParagraph("AI Review").setHeading(DocumentApp.ParagraphHeading.HEADING2);
 b.appendParagraph("Status: "+review.status+" | Score: "+review.score+"/100");
 return {documentId:doc.getId(),documentUrl:doc.getUrl()};
}