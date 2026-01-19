function testReportJsonOnly() {
  const prompt = [
    "Return ONLY valid JSON.",
    "{ \"title\": \"Test\", \"summary\": \"One paragraph\", \"sections\": [] }"
  ].join("\n");

  const out = callGemini(prompt, "");
  Logger.log(out);
}

function testGenerateReportEndToEnd() {
  const msg = generateReport("Executives", "Executive Summary");
  Logger.log(msg);
}
