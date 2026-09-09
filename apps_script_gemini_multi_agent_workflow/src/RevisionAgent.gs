function reviseReport_(report,review,research,analysis){
  const prompt=`You are the REPORT REVISION AGENT. Improve the report using the reviewer's instructions.\n\nORIGINAL REPORT:\n${report}\n\nISSUES:\n${JSON.stringify(review.issues,null,2)}\n\nREVISION INSTRUCTIONS:\n${JSON.stringify(review.revisionInstructions,null,2)}\n\nRESEARCH:\n${JSON.stringify(research,null,2)}\n\nANALYSIS:\n${JSON.stringify(analysis,null,2)}\n\nReturn the complete revised report. Do not introduce unsupported facts.`;
  return callGemini(prompt,"");
}
