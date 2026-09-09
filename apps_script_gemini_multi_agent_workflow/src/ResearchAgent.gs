function runResearchAgent_(userRequest,sourceData){
  const prompt=`You are the RESEARCH AGENT. Create a factual research brief from the supplied spreadsheet data.\n\nUSER OBJECTIVE:\n${userRequest}\n\nSOURCE DATA:\n${JSON.stringify(sourceData)}\n\nReturn JSON only:\n{"datasetSummary":"","importantFacts":[],"notableValues":[],"possiblePatterns":[],"dataLimitations":[]}\n\nRules: stay grounded in the data; do not invent facts; do not make recommendations; identify uncertainty; separate observations from assumptions.`;
  return parseGeminiJson_(callGemini(prompt,""));
}
