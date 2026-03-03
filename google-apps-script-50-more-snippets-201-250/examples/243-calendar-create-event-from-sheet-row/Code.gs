function ex243_createEventFromActiveRow() {
  const sh = SpreadsheetApp.getActiveSheet();
  const row = sh.getActiveRange().getRow();
  const [title, startStr, endStr] = sh.getRange(row, 1, 1, 3).getValues()[0];
  const start = new Date(startStr);
  const end = new Date(endStr);
  CalendarApp.getDefaultCalendar().createEvent(String(title), start, end);
}
