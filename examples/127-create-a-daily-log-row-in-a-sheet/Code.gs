// 127) Create a “daily log” row in a sheet
function ex127_appendDailyLog() {
  const sh = SpreadsheetApp.getActiveSheet();
  sh.appendRow([new Date(), Session.getActiveUser().getEmail(), 'Daily log entry']);
}
