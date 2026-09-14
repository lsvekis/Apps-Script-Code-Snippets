function runResearchAgent_(q,d){
 return parseGeminiJson_(callGemini(`You are the RESEARCH AGENT.
OBJECTIVE:${q}
DATA:${JSON.stringify(d)}
Return JSON only:
{"datasetSummary":"","importantFacts":[],"notableValues":[],"possiblePatterns":[],"dataLimitations":[]}
Stay factual. Do not invent facts or make recommendations.`,""));
}
function runAnalysisAgent_(q,r){
 return parseGeminiJson_(callGemini(`You are the ANALYSIS AGENT.
OBJECTIVE:${q}
RESEARCH:${JSON.stringify(r)}
Return JSON only:
{"keyInsights":[],"trends":[],"concerns":[],"opportunities":[],"recommendedActions":[]}
Base conclusions only on the research.`,""));
}
function runReportAgent_(q,r,a){
 return callGemini(`You are the REPORT AGENT.
OBJECTIVE:${q}
RESEARCH:${JSON.stringify(r)}
ANALYSIS:${JSON.stringify(a)}
Write a concise executive report with Executive Summary, Key Findings, Trends, Concerns, Opportunities, Recommended Actions and Data Limitations. Do not introduce unsupported facts.`,"");
}
function runReviewAgent_(r,a,report){
 const x=parseGeminiJson_(callGemini(`You are the REVIEW AGENT.
RESEARCH:${JSON.stringify(r)}
ANALYSIS:${JSON.stringify(a)}
REPORT:${report}
Return JSON only:
{"status":"PASS","score":0,"issues":[],"revisionInstructions":[]}
Check factual grounding, unsupported claims, omissions, clarity and usefulness. Use PASS only when ready; otherwise REVISE.`,""));
 x.status=x.status==="PASS"?"PASS":"REVISE";x.score=Number(x.score)||0;
 x.issues=Array.isArray(x.issues)?x.issues:[];
 x.revisionInstructions=Array.isArray(x.revisionInstructions)?x.revisionInstructions:[];
 return x;
}
function reviseReport_(report,review,r,a){
 return callGemini(`You are the REPORT REVISION AGENT.
REPORT:${report}
ISSUES:${JSON.stringify(review.issues)}
INSTRUCTIONS:${JSON.stringify(review.revisionInstructions)}
RESEARCH:${JSON.stringify(r)}
ANALYSIS:${JSON.stringify(a)}
Return the complete revised report. Do not introduce unsupported facts.`,"");
}