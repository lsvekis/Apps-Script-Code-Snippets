function generateChart(request) {
  if (!request) return "Enter a chart request.";

  let plan;
  try {
    plan = planChart(request);
  } catch (e) {
    return "Gemini error: " + e;
  }

  const sheet = SpreadsheetApp.getActiveSheet();
  const dataRange = sheet.getDataRange();
  const builder = sheet.newChart();

  builder.addRange(dataRange);

  switch (plan.type) {
    case "pie":
      builder.setChartType(Charts.ChartType.PIE);
      break;
    case "line":
      builder.setChartType(Charts.ChartType.LINE);
      break;
    case "bar":
      builder.setChartType(Charts.ChartType.BAR);
      break;
    default:
      builder.setChartType(Charts.ChartType.COLUMN);
  }

  builder.setPosition(5, 5, 0, 0);
  sheet.insertChart(builder.build());

  return "Chart created.";
}