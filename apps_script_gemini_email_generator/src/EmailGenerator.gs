function generateEmail(p){
 const prompt = "Write email: "+p;
 const res = callGemini(prompt,"");
 return createDraft_(res);
}