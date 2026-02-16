// 124) Write a chart to sheet (basic column chart)
function ex124_createChart() {
  const sh = SpreadsheetApp.getActiveSheet();
  const range = sh.getRange('A1:B10');
  const chart = sh.newChart()
    .setChartType(Charts.ChartType.COLUMN)
    .addRange(range)
    .setPosition(1, 4, 0, 0)
    .build();
  sh.insertChart(chart);
}
