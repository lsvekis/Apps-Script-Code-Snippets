/**
 * Read selected range as a 2D array.
 * Assumes first row is headers.
 */
function getSelectedData_() {
  const range = SpreadsheetApp.getActiveRange();
  if (!range) throw new Error("No range selected.");

  const values = range.getValues();
  if (!values || values.length < 2) {
    throw new Error("Select a range with headers and at least one data row.");
  }

  return {
    rangeA1: range.getA1Notation(),
    sheetName: range.getSheet().getName(),
    values: values
  };
}
