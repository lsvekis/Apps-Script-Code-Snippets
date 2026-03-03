function ex210_statusDropdownAndColors() {
  const sh = SpreadsheetApp.getActiveSheet();
  const range = sh.getRange('C2:C');
  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['New','In Progress','Blocked','Done'], true)
    .setAllowInvalid(false).build();
  range.setDataValidation(rule);

  const rules = sh.getConditionalFormatRules();
  const mk = (text, bg) => SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo(text).setBackground(bg).setRanges([range]).build();
  sh.setConditionalFormatRules([...rules, mk('New','#e5e7eb'), mk('In Progress','#dbeafe'), mk('Blocked','#fee2e2'), mk('Done','#dcfce7')]);
}
