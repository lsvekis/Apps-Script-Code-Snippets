function runMultiAgentWorkflow(userRequest){
  if(!userRequest||!userRequest.trim()) throw new Error("Enter a request.");
  const workflowId=Utilities.getUuid();
  const sourceData=readSourceData_();
  logAgentStep_(workflowId,"SYSTEM","Source data loaded");
  const research=runResearchAgent_(userRequest,sourceData);
  logAgentStep_(workflowId,"RESEARCH","Research completed");
  const analysis=runAnalysisAgent_(userRequest,research);
  logAgentStep_(workflowId,"ANALYSIS","Analysis completed");
  let report=runReportAgent_(userRequest,research,analysis);
  logAgentStep_(workflowId,"REPORT","Initial report completed");
  let review=runReviewAgent_(research,analysis,report);
  logAgentStep_(workflowId,"REVIEW",review.status+" ("+review.score+"/100)");
  if(review.status==="REVISE"){
    report=reviseReport_(report,review,research,analysis);
    logAgentStep_(workflowId,"REVISION","Report revised");
    review=runReviewAgent_(research,analysis,report);
    logAgentStep_(workflowId,"FINAL REVIEW",review.status+" ("+review.score+"/100)");
  }
  const document=createFinalReport_(userRequest,sourceData,report,review);
  logAgentStep_(workflowId,"SYSTEM","Final Google Doc created");
  return {workflowId:workflowId,review:review,documentUrl:document.documentUrl};
}
