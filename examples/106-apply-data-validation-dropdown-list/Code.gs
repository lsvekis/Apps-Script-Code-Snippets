// 106) Apply data validation dropdown list
function ex106_dropdownValidation() {
  const sh = SpreadsheetApp.getActiveSheet();
  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['New', 'In Progress', 'Done'], true)
    .setAllowInvalid(false)
    .build();
  sh.getRange('C2:C').setDataValidation(rule);
}
