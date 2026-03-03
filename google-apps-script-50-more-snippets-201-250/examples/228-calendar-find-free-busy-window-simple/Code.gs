function ex228_listTodaysEvents() {
  const cal = CalendarApp.getDefaultCalendar();
  const start = new Date(); start.setHours(0,0,0,0);
  const end = new Date(); end.setHours(23,59,59,999);
  const events = cal.getEvents(start, end);
  events.forEach(e => Logger.log(`${e.getTitle()} | ${e.getStartTime()} - ${e.getEndTime()}`));
}
