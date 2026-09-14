function detectIntent_(command){
 const caps=getCapabilities_().map(x=>({name:x.name,description:x.description}));
 const p=`You are an intent router for a Google Workspace AI application.
AVAILABLE CAPABILITIES:
${JSON.stringify(caps,null,2)}
USER COMMAND:
${command}
Return JSON only:
{"intent":"","confidence":0,"reason":""}
Choose only an available capability. confidence must be 0 to 1. Choose the user's primary objective.`;
 return parseGeminiJson_(callGemini(p,""));
}