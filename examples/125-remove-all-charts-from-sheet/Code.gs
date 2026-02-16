// 125) Remove all charts from sheet
function ex125_removeCharts() {
  const sh = SpreadsheetApp.getActiveSheet();
  sh.getCharts().forEach(c => sh.removeChart(c));
}
