function planChart(request) {
  const context = getSheetData_();

  const prompt = `
You are an expert data visualization assistant.

Headers available:
${context.headers.join(", ")}

User request:
${request}

Return JSON in this format:

{
  "type":"bar|column|pie|line",
  "xColumn":"column name",
  "yColumn":"column name"
}
`;

  let result = callGemini(prompt, "");
  result = result.replace(/```json/g, "").replace(/```/g, "").trim();
  return JSON.parse(result);
}