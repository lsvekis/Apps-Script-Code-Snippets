// 137) Import a CSV string into the sheet
function ex137_importCsvString() {
  const csv = "Name,Score\nAva,95\nNoah,88";
  const rows = Utilities.parseCsv(csv);
  const sh = SpreadsheetApp.getActiveSheet();
  sh.getRange(1,1,rows.length,rows[0].length).setValues(rows);
}
