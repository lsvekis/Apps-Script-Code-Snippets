function getMeetingNotes_(docId) {
  if (!docId || !String(docId).trim()) throw new Error("Missing Doc ID.");
  const doc = DocumentApp.openById(String(docId).trim());
  const text = doc.getBody().getText() || "";
  const limit = 12000;
  return text.length > limit ? text.substring(0, limit) : text;
}
