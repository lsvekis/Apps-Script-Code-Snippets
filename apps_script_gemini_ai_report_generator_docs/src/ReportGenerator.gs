function generateReport(audience, tone) {
  let data;
  try {
    data = getSheetSummary_();
  } catch (e) {
    return "Data error: " + e;
  }

  // Keep prompt size reasonable: include headers + up to first 200 rows.
  const maxRows = 200;
  const sample = {
    sheetName: data.sheetName,
    headers: data.headers,
    rows: data.rows.slice(0, Math.min(data.rows.length, maxRows))
  };

  const prompt = [
    "You are an expert data analyst and business writer.",
    "",
    "Analyze the dataset and write a report.",
    "Audience: " + (audience || "General"),
    "Tone: " + (tone || "Executive Summary"),
    "",
    "Dataset (headers + rows):",
    JSON.stringify(sample),
    "",
    "Return JSON ONLY using this structure:",
    "{",
    "  \"title\": \"Report title\",",
    "  \"summary\": \"One-paragraph executive summary\",",
    "  \"sections\": [",
    "    { \"heading\": \"Section heading\", \"content\": \"Paragraph text\", \"bullets\": [\"bullet\"] }",
    "  ],",
    "  \"risks\": [\"risk\"] ,",
    "  \"nextSteps\": [\"next step\"]",
    "}",
    "",
    "Rules:",
    "- Keep it grounded in the dataset.",
    "- Prefer concise, useful sections.",
    "- If exact numbers are unclear, state assumptions clearly.",
    "- Return ONLY valid JSON."
  ].join("\n");

  let jsonText;
  try {
    jsonText = callGemini(prompt, "");
  } catch (e) {
    Logger.log("Gemini error: " + e);
    return "Gemini error: " + e;
  }

  jsonText = jsonText.trim();
  if (jsonText.startsWith("```")) {
    jsonText = jsonText.replace(/```json/i, "").replace(/```/g, "").trim();
  }

  let report;
  try {
    report = JSON.parse(jsonText);
  } catch (e) {
    Logger.log("JSON parse error: " + e + "\nRaw:\n" + jsonText);
    return "Could not parse Gemini JSON. Check logs for details.";
  }

  const docUrl = writeReportToDoc_(report);
  return "✅ Report created:\n" + docUrl;
}
