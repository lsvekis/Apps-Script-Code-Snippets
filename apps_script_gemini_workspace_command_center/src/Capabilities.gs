function executeDataAnalysis_(command){
 const d=readActiveSheet_();
 return {type:"ANALYSIS",content:callGemini(`You are a business data analyst.
USER REQUEST:${command}
DATA:${JSON.stringify(d)}
Identify trends, anomalies, notable values, opportunities, concerns and recommended actions. Do not invent facts. Identify limitations.`,"")};
}
function executeDataSummary_(command){
 const d=readActiveSheet_();
 return {type:"SUMMARY",content:callGemini(`Summarize this spreadsheet for the user's request.
REQUEST:${command}
DATA:${JSON.stringify(d)}
Explain what it contains, major values, obvious patterns and limitations. Do not invent facts.`,"")};
}
function executeCodeReview_(command){
 return {type:"CODE_REVIEW",content:callGemini(`You are an expert Google Apps Script reviewer.
USER INPUT:${command}
Check syntax, runtime errors, Apps Script API mistakes, unnecessary calls, performance, maintainability and security. Provide summary, problems, fixes, improved code when appropriate, and tests. Do not invent errors.`,"")};
}
function executeEmailPreparation_(command){
 return {type:"EMAIL_DRAFT",sent:false,content:callGemini(`Prepare a professional email for this request:
${command}
Return SUBJECT and BODY. Do not invent recipients, names, dates, commitments or facts. Identify essential missing information. Do not send anything.`,"")};
}