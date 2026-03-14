function planDashboard(request) {
  const context = getSheetContext_();

  const prompt = `
You are a data visualization expert.

Headers available:
${context.headers.join(", ")}

User request:
${request}

Return JSON like:

{
  "charts":[
    {"type":"bar","x":"column name","y":"column name"},
    {"type":"line","x":"column name","y":"column name"}
  ]
}
`;

  let result = callGemini(prompt, "");
  result = result.replace(/```json/g, "").replace(/```/g, "").trim();
  return JSON.parse(result);
}