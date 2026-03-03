function ex237_docToPdfInFolder(docId, folderId) {
  const folder = DriveApp.getFolderById(folderId);
  const file = DriveApp.getFileById(docId);
  const pdfBlob = file.getBlob().getAs(MimeType.PDF).setName(file.getName() + '.pdf');
  const pdf = folder.createFile(pdfBlob);
  Logger.log(pdf.getUrl());
}
