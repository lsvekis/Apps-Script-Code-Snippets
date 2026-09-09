function runReviewAgent_(research,analysis,report){
  const prompt=`You are the REVIEW AGENT. Review the report against the research and analysis.\n\nRESEARCH:\n${JSON.stringify(research,null,2)}\n\nANALYSIS:\n${JSON.stringify(analysis,null,2)}\n\nREPORT:\n${report}\n\nReturn JSON only:\n{"status":"PASS","score":0,"issues":[],"revisionInstructions":[]}\n\nEvaluate factual grounding, unsupported claims, missing major findings, clarity, usefulness, and recommendation quality. Score 0-100. Use PASS only if ready; otherwise REVISE.`;
  const r=parseGeminiJson_(callGemini(prompt,""));
  if(!["PASS","REVISE"].includes(r.status)) r.status="REVISE";
  r.score=Number(r.score)||0;
  r.issues=Array.isArray(r.issues)?r.issues:[];
  r.revisionInstructions=Array.isArray(r.revisionInstructions)?r.revisionInstructions:[];
  return r;
}
