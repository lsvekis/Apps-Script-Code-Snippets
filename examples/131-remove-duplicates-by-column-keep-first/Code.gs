// 131) Remove duplicates by column (keep first)
function ex131_removeDuplicatesByColA() {
  const sh = SpreadsheetApp.getActiveSheet();
  sh.getDataRange().removeDuplicates([1]);
}
