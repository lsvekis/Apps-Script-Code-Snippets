const MIN_INTENT_CONFIDENCE=0.70;
function validateIntent_(r){
 if(!r)throw new Error("No routing result.");
 const c=getCapability_(r.intent);
 if(!c)throw new Error("Unsupported intent: "+r.intent);
 const n=Number(r.confidence);
 if(!Number.isFinite(n)||n<0||n>1)throw new Error("Invalid confidence.");
 if(n<MIN_INTENT_CONFIDENCE)throw new Error("Routing confidence is too low. Describe the task more specifically.");
 return c;
}