function processCommand(command){
 if(!command||!command.trim())throw new Error("Enter a command.");
 const id=Utilities.getUuid(),routing=detectIntent_(command),cap=validateIntent_(routing);
 logCommand_(id,command,routing.intent,routing.confidence,"ROUTED");
 let result;
 switch(routing.intent){
  case "ANALYZE_DATA":result=executeDataAnalysis_(command);break;
  case "SUMMARIZE_DATA":result=executeDataSummary_(command);break;
  case "CREATE_REPORT":result=executeReportWorkflow_(command,id);break;
  case "REVIEW_CODE":result=executeCodeReview_(command);break;
  case "PREPARE_EMAIL":result=executeEmailPreparation_(command);break;
  default:throw new Error("No handler available.");
 }
 logCommand_(id,command,routing.intent,routing.confidence,"COMPLETED");
 return {commandId:id,routing:routing,risk:cap.risk,result:result};
}