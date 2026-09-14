function logCommand_(id,command,intent,confidence,status){
 const ss=SpreadsheetApp.getActive();let s=ss.getSheetByName("AI Command History");
 if(!s){s=ss.insertSheet("AI Command History");s.appendRow(["Timestamp","Command ID","Command","Intent","Confidence","Status"]);s.setFrozenRows(1);}
 s.appendRow([new Date(),id,command,intent,confidence,status]);
}
function logWorkflowStep_(id,stage,result){
 const ss=SpreadsheetApp.getActive();let s=ss.getSheetByName("AI Workflow Log");
 if(!s){s=ss.insertSheet("AI Workflow Log");s.appendRow(["Timestamp","Command ID","Stage","Result"]);s.setFrozenRows(1);}
 s.appendRow([new Date(),id,stage,result]);
}