function cleanJsonResponse_(text){return String(text||"").replace(/```json/gi,"").replace(/```/g,"").trim();}
function parseGeminiJson_(text){const cleaned=cleanJsonResponse_(text);try{return JSON.parse(cleaned);}catch(e){throw new Error("Gemini returned invalid JSON. Response: "+cleaned.substring(0,500));}}
