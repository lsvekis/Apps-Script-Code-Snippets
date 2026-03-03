function ex205_backupSpreadsheetFile() {
  const ss = SpreadsheetApp.getActive();
  const file = DriveApp.getFileById(ss.getId());
  const name = ss.getName() + ' Backup ' + Utilities.formatDate(new Date(), ss.getSpreadsheetTimeZone(), 'yyyyMMdd-HHmm');
  const copy = file.makeCopy(name);
  Logger.log(copy.getUrl());
}
