const GEMINI_API_KEY = "YOUR_API_KEY_HERE";
const GEMINI_MODEL   = "gemini-2.5-flash";

function callGemini(prompt, text) {
  if (!GEMINI_API_KEY || GEMINI_API_KEY === "YOUR_API_KEY_HERE") {
    throw new Error("Set GEMINI_API_KEY in GeminiHelpers.gs");
  }

  const url = "https://generativelanguage.googleapis.com/v1/models/" +
              GEMINI_MODEL + ":generateContent?key=" + GEMINI_API_KEY;

  const payload = {
    contents: [{
      parts: [{
        text: prompt + (text ? "\n\n---\n\n" + text : "")
      }]
    }]
  };

  const res = UrlFetchApp.fetch(url, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  const body = res.getContentText();
  const json = JSON.parse(body);

  if (json.error) {
    throw new Error("Gemini API error: " + json.error.message +
                    (json.error.status ? " (" + json.error.status + ")" : ""));
  }

  const out =
    json.candidates &&
    json.candidates[0] &&
    json.candidates[0].content &&
    json.candidates[0].content.parts &&
    json.candidates[0].content.parts[0].text;

  if (!out) {
    throw new Error("Unexpected Gemini response: " + body);
  }

  return out;
}

function testGeminiConnection() {
  Logger.log(callGemini("Say hello in one sentence.", ""));
}
