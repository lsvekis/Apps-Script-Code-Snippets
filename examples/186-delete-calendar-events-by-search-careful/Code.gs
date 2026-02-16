// 186) Delete calendar events by search (careful)
function ex186_deleteEventsBySearch() {
  const cal=CalendarApp.getDefaultCalendar();
  const start=new Date(Date.now()-7*24*3600*1000);
  const end=new Date(Date.now()+7*24*3600*1000);
  const events=cal.getEvents(start,end,{search:'Temp Event'});
  events.forEach(e=>e.deleteEvent());
}
