function createEventFromPrompt(p){
 const res = callGemini("Create event JSON:"+p);
 const e = JSON.parse(res.replace(/```json|```/g,""));
 return createEvent_(e);
}