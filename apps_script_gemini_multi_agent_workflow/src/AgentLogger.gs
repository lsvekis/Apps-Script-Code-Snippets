function logAgentStep_(workflowId,agent,message){
  const ss=SpreadsheetApp.getActiveSpreadsheet();
  let sheet=ss.getSheetByName("AI Agent Log");
  if(!sheet){sheet=ss.insertSheet("AI Agent Log");sheet.appendRow(["Timestamp","Workflow ID","Agent","Message"]);sheet.setFrozenRows(1);}
  sheet.appendRow([new Date(),workflowId,agent,message]);
}
