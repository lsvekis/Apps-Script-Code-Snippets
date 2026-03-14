function getSheetData_() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  return {
    sheetName: sheet.getName(),
    headers: data[0] || []
  };
}