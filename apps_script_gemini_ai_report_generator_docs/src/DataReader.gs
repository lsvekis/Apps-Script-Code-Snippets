function getSheetSummary_() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const values = sheet.getDataRange().getValues();

  if (!values || values.length < 2) {
    throw new Error("Sheet must include headers + at least one data row.");
  }

  return {
    sheetName: sheet.getName(),
    headers: values[0],
    rows: values.slice(1)
  };
}
