function indexFolder(folderId, refresh) {
  if (!folderId || !String(folderId).trim()) return "Please provide a Drive folder ID.";

  const sheet = getKbSheet_();
  const existing = refresh ? getExistingIndexMap_(sheet) : {};

  let folder;
  try {
    folder = DriveApp.getFolderById(folderId);
  } catch (e) {
    return "Folder error: " + e;
  }

  const files = folder.getFilesByType(MimeType.GOOGLE_DOCS);
  let added = 0;
  let updated = 0;
  let skipped = 0;

  while (files.hasNext()) {
    const file = files.next();
    const docId = file.getId();
    const title = file.getName();
    const url = file.getUrl();

    let text = "";
    try {
      text = extractDocText_(docId, 12000);
    } catch (e) {
      Logger.log("Doc read failed for " + docId + ": " + e);
      skipped++;
      continue;
    }

    let summary = "";
    let keywords = [];
    try {
      summary = summarizeForKb_(title, text);
      keywords = extractKeywords_(title, text);
    } catch (e) {
      Logger.log("Gemini failed for " + docId + ": " + e);
      skipped++;
      continue;
    }

    const row = [docId, title, url, summary, keywords.join(", "), new Date()];

    if (refresh && existing[docId]) {
      sheet.getRange(existing[docId], 1, 1, row.length).setValues([row]);
      updated++;
    } else {
      sheet.appendRow(row);
      added++;
    }
  }

  return "✅ KB indexing complete. Added: " + added + ", Updated: " + updated + ", Skipped: " + skipped;
}
