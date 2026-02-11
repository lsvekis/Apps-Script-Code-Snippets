function analyzeMeeting_(notes, context) {
  const prompt = [
    "You are an expert meeting analyst.",
    "",
    "Analyze the meeting notes and return JSON ONLY in this format:",
    "",
    "{",
    "  \"summary\": \"brief meeting overview\",",
    "  \"decisions\": [\"decision 1\", \"decision 2\"],",
    "  \"actionItems\": [",
    "    { \"task\": \"task description\", \"owner\": \"name or role\", \"due\": \"date or unknown\" }",
    "  ],",
    "  \"openQuestions\": [\"question 1\", \"question 2\"],",
    "  \"risks\": [\"risk 1\", \"risk 2\"]",
    "}",
    "",
    "Rules:",
    "- Do NOT invent details.",
    "- If owner or due date is missing, use \"unknown\".",
    "- Be concise and factual.",
    "- Return ONLY valid JSON (no markdown, no commentary).",
    "",
    "Meeting context (optional):",
    (context || ""),
    "",
    "Meeting notes:",
    notes
  ].join("\n");

  let out = callGemini(prompt, "");
  out = String(out || "").trim();
  if (out.startsWith("```")) out = out.replace(/```json/i, "").replace(/```/g, "").trim();
  return JSON.parse(out);
}
