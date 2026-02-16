// 114) Create a timestamp column when status changes (installable onEdit)
function ex114_onEditTimestamp(e) {
  const sh = e.range.getSheet();
  if (sh.getName() !== SpreadsheetApp.getActiveSheet().getName()) return;
  const statusCol = 3, tsCol = 4; // C status, D timestamp
  if (e.range.getColumn() === statusCol && e.range.getRow() > 1) {
    sh.getRange(e.range.getRow(), tsCol).setValue(new Date());
  }
}
