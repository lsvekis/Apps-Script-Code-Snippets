function getKbSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("KB_Index");
  if (!sheet) throw new Error("Create a sheet tab named KB_Index with headers in row 1.");
  return sheet;
}

function extractDocText_(docId, maxChars) {
  const doc = DocumentApp.openById(docId);
  const text = doc.getBody().getText() || "";
  const limit = maxChars || 12000;
  return text.length > limit ? text.substring(0, limit) : text;
}

function getExistingIndexMap_(sheet) {
  const values = sheet.getDataRange().getValues();
  const map = {};
  for (let i = 1; i < values.length; i++) {
    const id = String(values[i][0] || "").trim();
    if (id) map[id] = i + 1;
  }
  return map;
}
