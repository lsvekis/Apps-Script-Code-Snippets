function ex203_getConfigValue(key) {
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getSheetByName('Config');
  if (!sh) throw new Error('Missing Config sheet');
  const data = sh.getDataRange().getValues();
  const map = Object.fromEntries(data.slice(1).map(r => [String(r[0]), r[1]]));
  return map[key];
}
