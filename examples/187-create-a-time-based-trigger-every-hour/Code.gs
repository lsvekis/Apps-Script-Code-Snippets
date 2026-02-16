// 187) Create a time-based trigger (every hour)
function ex187_createHourlyTrigger() {
  ScriptApp.newTrigger('ex127_appendDailyLog')
    .timeBased()
    .everyHours(1)
    .create();
}
