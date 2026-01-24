function summarizeForKb_(title, text) {
  const prompt = [
    "Summarize this doc for a searchable knowledge base.",
    "Return 4-7 concise bullet-style sentences in plain text.",
    "No markdown. No numbering. Keep it factual.",
    "",
    "Doc title: " + title,
    "Doc text:",
    text
  ].join("\n");

  const out = callGemini(prompt, "");
  return String(out || "").trim();
}

function extractKeywords_(title, text) {
  const prompt = [
    "Return ONLY a JSON array of 8-15 keywords useful for searching this doc.",
    "No markdown. No extra text.",
    "",
    "Doc title: " + title,
    "Doc text:",
    text
  ].join("\n");

  const out = callGemini(prompt, "");
  const cleaned = String(out || "").trim().replace(/```json/i, "").replace(/```/g, "").trim();

  try {
    const arr = JSON.parse(cleaned);
    return Array.isArray(arr) ? arr.map(String) : [];
  } catch (e) {
    return [];
  }
}
