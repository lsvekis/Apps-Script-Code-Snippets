function generateDashboard(request) {
  if (!request) return "Enter a dashboard request.";

  let plan;
  try {
    plan = planDashboard(request);
  } catch (e) {
    return "Gemini error: " + e;
  }

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const active = ss.getActiveSheet();
  const existing = ss.getSheetByName("AI Dashboard");
  if (existing) ss.deleteSheet(existing);

  const dashboard = ss.insertSheet("AI Dashboard");
  const dataRange = active.getDataRange();

  let row = 1;

  (plan.charts || []).forEach(chart => {
    const builder = dashboard.newChart();
    builder.addRange(dataRange);

    switch (chart.type) {
      case "line":
        builder.setChartType(Charts.ChartType.LINE);
        break;
      case "pie":
        builder.setChartType(Charts.ChartType.PIE);
        break;
      case "bar":
        builder.setChartType(Charts.ChartType.BAR);
        break;
      default:
        builder.setChartType(Charts.ChartType.COLUMN);
    }

    builder.setPosition(row, 1, 0, 0);
    dashboard.insertChart(builder.build());
    row += 15;
  });

  return "Dashboard created.";
}