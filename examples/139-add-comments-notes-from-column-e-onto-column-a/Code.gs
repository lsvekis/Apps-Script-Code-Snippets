// 139) Add comments (notes) from column E onto column A
function ex139_notesFromColE() {
  const sh = SpreadsheetApp.getActiveSheet();
  const last = sh.getLastRow();
  const notes = sh.getRange(2,5,Math.max(1,last-1),1).getValues().flat();
  const target = sh.getRange(2,1,notes.length,1);
  target.setNotes(notes.map(n=>[String(n||'')]));
}
