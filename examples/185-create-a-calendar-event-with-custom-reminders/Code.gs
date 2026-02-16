// 185) Create a calendar event with custom reminders
function ex185_eventWithReminders() {
  const cal=CalendarApp.getDefaultCalendar();
  const start=new Date(Date.now()+2*3600*1000);
  const end=new Date(start.getTime()+45*60000);
  const ev=cal.createEvent('Deep Work', start, end);
  ev.addPopupReminder(10);
  ev.addEmailReminder(30);
}
