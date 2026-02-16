// 117) Add conditional formatting: top 10%
function ex117_cfTopTenPercent() {
  const sh = SpreadsheetApp.getActiveSheet();
  const rng = sh.getRange(2,2,Math.max(1, sh.getLastRow()-1),1);
  const formula = '=B2>=PERCENTILE($B$2:$B,0.9)';
  const r2 = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(formula)
    .setBackground('#d1fae5')
    .setRanges([rng])
    .build();
  sh.setConditionalFormatRules([...sh.getConditionalFormatRules(), r2]);
}
