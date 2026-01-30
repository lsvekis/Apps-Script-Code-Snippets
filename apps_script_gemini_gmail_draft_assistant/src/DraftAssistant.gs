function draftReply(query, tone, extraContext) {
  let email;
  try {
    email = getLatestThreadText_(query);
  } catch (e) {
    return "Gmail error: " + e;
  }

  const prompt = [
    "You are an expert email assistant.",
    "",
    "Write a reply draft based on the message below.",
    "",
    "Constraints:",
    "- Tone: " + (tone || "Professional"),
    "- Keep it clear and realistic.",
    "- Do NOT invent details.",
    "- If key info is missing, ask 1-3 precise questions.",
    "- Return JSON ONLY in this format:",
    "",
    "{",
    "  \"reply\": \"full email reply text\",",
    "  \"actionItems\": [\"item 1\", \"item 2\"],",
    "  \"subjectOptions\": [\"subject 1\", \"subject 2\"]",
    "}",
    "",
    "Extra context (optional):",
    (extraContext || ""),
    "",
    "Email:",
    "From: " + email.from,
    "Subject: " + email.subject,
    "Date: " + email.date,
    "",
    "Body:",
    email.body
  ].join("\n");

  let out;
  try {
    out = callGemini(prompt, "");
  } catch (e) {
    return "Gemini error: " + e;
  }

  out = String(out || "").trim();
  if (out.startsWith("```")) {
    out = out.replace(/```json/i, "").replace(/```/g, "").trim();
  }

  let json;
  try {
    json = JSON.parse(out);
  } catch (e) {
    Logger.log("Bad JSON:\n" + out);
    return "Could not parse Gemini JSON. Check logs for the raw response.";
  }

  return formatDraftOutput_(json, email);
}

function formatDraftOutput_(json, email) {
  const lines = [];
  lines.push("✅ Draft created for:");
  lines.push("Subject: " + email.subject);
  lines.push("");

  if (json.subjectOptions && json.subjectOptions.length) {
    lines.push("Subject options:");
    json.subjectOptions.forEach(s => lines.push("- " + s));
    lines.push("");
  }

  lines.push("Reply draft:");
  lines.push(json.reply || "(no reply returned)");
  lines.push("");

  if (json.actionItems && json.actionItems.length) {
    lines.push("Action items:");
    json.actionItems.forEach(a => lines.push("- " + a));
  }

  return lines.join("\n");
}
