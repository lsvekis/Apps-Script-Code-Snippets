function runAnalysisAgent_(userRequest,research){
  const prompt=`You are the ANALYSIS AGENT. Analyze the factual research brief.\n\nUSER OBJECTIVE:\n${userRequest}\n\nRESEARCH BRIEF:\n${JSON.stringify(research,null,2)}\n\nReturn JSON only:\n{"keyInsights":[],"trends":[],"concerns":[],"opportunities":[],"recommendedActions":[]}\n\nRules: use only the research brief; do not invent evidence; distinguish evidence from interpretation; prioritize important findings; make actions practical.`;
  return parseGeminiJson_(callGemini(prompt,""));
}
