function runReportAgent_(userRequest,research,analysis){
  const prompt=`You are the REPORT AGENT. Create a concise professional executive report.\n\nUSER OBJECTIVE:\n${userRequest}\n\nRESEARCH:\n${JSON.stringify(research,null,2)}\n\nANALYSIS:\n${JSON.stringify(analysis,null,2)}\n\nUse headings: Executive Summary, Key Findings, Trends, Concerns, Opportunities, Recommended Actions, Data Limitations. Do not introduce new facts or hide uncertainty.`;
  return callGemini(prompt,"");
}
