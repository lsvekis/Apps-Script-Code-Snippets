// 188) Delete triggers by handler name
function ex188_deleteTriggersByHandler() {
  const handler='ex127_appendDailyLog';
  ScriptApp.getProjectTriggers().forEach(t=>{
    if(t.getHandlerFunction()===handler) ScriptApp.deleteTrigger(t);
  });
}
