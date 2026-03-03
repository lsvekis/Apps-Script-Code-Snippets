function ex227_weeklyRecurringEvent() {
  const cal = CalendarApp.getDefaultCalendar();
  const start = new Date(Date.now() + 24*3600*1000);
  const end = new Date(start.getTime() + 30*60000);
  const rule = CalendarApp.newRecurrence().addWeeklyRule().times(8);
  cal.createEventSeries('Weekly Check-in', start, end, rule);
}
