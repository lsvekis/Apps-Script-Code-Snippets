const GEMINI_MODEL="gemini-2.5-flash";
function callGemini(prompt,additionalText){
 const key=PropertiesService.getScriptProperties().getProperty("GEMINI_API_KEY");
 if(!key)throw new Error("Set GEMINI_API_KEY in Script Properties.");
 const url="https://generativelanguage.googleapis.com/v1/models/"+GEMINI_MODEL+":generateContent?key="+encodeURIComponent(key);
 const payload={contents:[{parts:[{text:prompt+(additionalText?"\n\n"+additionalText:"")}]}]};
 const response=UrlFetchApp.fetch(url,{method:"post",contentType:"application/json",payload:JSON.stringify(payload),muteHttpExceptions:true});
 const json=JSON.parse(response.getContentText());
 if(response.getResponseCode()>=400||json.error)throw new Error(json.error?json.error.message:"Gemini request failed.");
 const parts=json.candidates&&json.candidates[0]&&json.candidates[0].content&&json.candidates[0].content.parts;
 if(!parts||!parts.length)throw new Error("Gemini returned no text.");
 return parts[0].text;
}