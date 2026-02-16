// 126) Duplicate sheet and rename with timestamp
function ex126_duplicateSheet() {
  const ss = SpreadsheetApp.getActive();
  const src = ss.getActiveSheet();
  const copy = src.copyTo(ss);
  copy.setName(src.getName() + ' - ' + Utilities.formatDate(new Date(), ss.getSpreadsheetTimeZone(), 'yyyyMMdd-HHmm'));
}
