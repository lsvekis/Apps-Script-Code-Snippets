/**
 * JSON-only test (no sheet writes).
 */
function testGeminiPlanOnly() {
  const prompt = [
    "Return ONLY JSON for cleaning actions.",
    "{ \"actions\": [ { \"type\": \"trim\", \"column\": 1 } ] }"
  ].join("\n");

  const out = callGemini(prompt, "");
  Logger.log(out);
}

/**
 * End-to-end test on a small selected range.
 * Select a small range first, then run.
 */
function testCleanSelectedRange() {
  const msg = cleanSelectedRange("Trim spaces and lowercase emails. Remove duplicates.");
  Logger.log(msg);
}
