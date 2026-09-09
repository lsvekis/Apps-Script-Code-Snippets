const GEMINI_MODEL="gemini-2.5-flash";
function getGeminiApiKey_(){
  const key=PropertiesService.getScriptProperties().getProperty("GEMINI_API_KEY");
  if(!key) throw new Error("Set GEMINI_API_KEY in Apps Script Project Settings > Script Properties.");
  return key;
}
function callGemini(prompt,additionalText){
  const key=getGeminiApiKey_();
  const url="https://generativelanguage.googleapis.com/v1/models/"+GEMINI_MODEL+":generateContent?key="+encodeURIComponent(key);
  const text=prompt+(additionalText?"\n\n"+additionalText:"");
  const response=UrlFetchApp.fetch(url,{method:"post",contentType:"application/json",payload:JSON.stringify({contents:[{parts:[{text:text}]}]}),muteHttpExceptions:true});
  const responseText=response.getContentText();
  let json;try{json=JSON.parse(responseText);}catch(e){throw new Error("Gemini returned an unreadable response.");}
  if(response.getResponseCode()>=400||json.error) throw new Error(json.error&&json.error.message?json.error.message:"Gemini request failed.");
  const candidate=json.candidates&&json.candidates[0],parts=candidate&&candidate.content&&candidate.content.parts;
  if(!parts||!parts.length||!parts[0].text) throw new Error("Gemini returned no text response.");
  return parts[0].text;
}
function testGeminiConnection(){Logger.log(callGemini("Return only the word OK.",""));}
