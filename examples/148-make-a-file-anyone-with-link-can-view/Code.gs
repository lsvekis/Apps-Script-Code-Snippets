// 148) Make a file “anyone with link can view”
function ex148_makePublicView() {
  const fileId='PASTE_FILE_ID';
  DriveApp.getFileById(fileId).setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
}
