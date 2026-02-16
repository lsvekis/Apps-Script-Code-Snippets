// 118) Create a named range for current data table
function ex118_createNamedRange() {
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getActiveSheet();
  const range = sh.getDataRange();
  ss.setNamedRange('DATA_TABLE', range);
}
