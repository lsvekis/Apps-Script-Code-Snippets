const GEMINI_API_KEY = "YOUR_API_KEY_HERE";
const GEMINI_MODEL = "gemini-2.5-flash";

function callGemini(prompt, text) {
  if (!GEMINI_API_KEY || GEMINI_API_KEY === "YOUR_API_KEY_HERE") {
    throw new Error("Set GEMINI_API_KEY in GeminiHelpers.gs");
  }

  const url = `https://generativelanguage.googleapis.com/v1/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

  const payload = {
    contents: [{
      parts: [{
        text: prompt + (text ? "\n\n" + text : "")
      }]
    }]
  };

  const res = UrlFetchApp.fetch(url, {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  const json = JSON.parse(res.getContentText());
  if (json.error) throw new Error(json.error.message);
  return json.candidates[0].content.parts[0].text;
}

function testGeminiConnection() {
  Logger.log(callGemini("Return the word OK.", ""));
}