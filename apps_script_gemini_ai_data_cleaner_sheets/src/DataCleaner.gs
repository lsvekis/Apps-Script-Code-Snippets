/**
 * Main entry called from the sidebar.
 * Calls Gemini to produce cleaning actions (JSON), then applies them.
 */
function cleanSelectedRange(instructions) {
  if (!instructions || !instructions.trim()) {
    return "Please enter cleaning instructions.";
  }

  let data;
  try {
    data = getSelectedData_();
  } catch (e) {
    return "Selection error: " + e;
  }

  // To avoid sending huge data, we include headers + up to first 25 rows.
  const sample = data.values.slice(0, Math.min(data.values.length, 26));

  const prompt = [
    "You are a data cleaning assistant for Google Sheets.",
    "",
    "Analyze the provided table sample and return cleaning actions in pure JSON ONLY (no markdown).",
    "",
    "User instructions:",
    instructions,
    "",
    "Table sample (first row is headers):",
    JSON.stringify(sample),
    "",
    "Return JSON using this structure:",
    "{",
    "  \"actions\": [",
    "    { \"type\": \"trim\" | \"lowercase\" | \"uppercase\" | \"normalize_date\", \"column\": 0 },",
    "    { \"type\": \"remove_duplicates\" }",
    "  ]",
    "}",
    "",
    "Rules:",
    "- Use zero-based column indexes.",
    "- Only include action types from the allowed list above.",
    "- Keep actions minimal and safe.",
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
    jsonText = jsonText.replace(/```json/i, "")
                       .replace(/```/g, "")
                       .trim();
  }

  let plan;
  try {
    plan = JSON.parse(jsonText);
  } catch (e) {
    Logger.log("JSON parse error: " + e + "\nRaw:\n" + jsonText);
    return "Could not parse Gemini JSON. Check logs for details.";
  }

  const actions = (plan && plan.actions) ? plan.actions : [];
  if (!actions.length) {
    return "No actions returned by Gemini. Try different instructions.";
  }

  try {
    applyCleaning_(actions);
  } catch (e) {
    Logger.log("Apply error: " + e);
    return "Error applying cleaning actions: " + e;
  }

  return "✅ Cleaned selected range (" + data.sheetName + "!" + data.rangeA1 + ").\nActions applied: " +
         actions.map(a => a.type + (a.column !== undefined ? "(col " + a.column + ")" : "")).join(", ");
}
