const GEMINI_API_KEY="YOUR_API_KEY";
function callGemini(prompt){
 const url=`https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
 const res=UrlFetchApp.fetch(url,{method:"post",contentType:"application/json",payload:JSON.stringify({contents:[{parts:[{text:prompt}]}]})});
 return JSON.parse(res.getContentText()).candidates[0].content.parts[0].text;
}