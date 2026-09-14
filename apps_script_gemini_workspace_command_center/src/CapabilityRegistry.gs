function getCapabilities_(){
 return [
  {name:"ANALYZE_DATA",description:"Analyze active spreadsheet data.",risk:"LOW"},
  {name:"SUMMARIZE_DATA",description:"Summarize active spreadsheet data.",risk:"LOW"},
  {name:"CREATE_REPORT",description:"Analyze spreadsheet data and create a Google Doc report.",risk:"MEDIUM"},
  {name:"REVIEW_CODE",description:"Review Apps Script code supplied by the user.",risk:"LOW"},
  {name:"PREPARE_EMAIL",description:"Prepare professional email content without sending it.",risk:"MEDIUM"}
 ];
}
function getCapability_(intent){return getCapabilities_().find(x=>x.name===intent);}