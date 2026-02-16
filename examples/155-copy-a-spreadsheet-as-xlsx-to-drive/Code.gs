// 155) Copy a spreadsheet as XLSX to Drive
function ex155_exportSheetAsXlsx() {
  const ssId = SpreadsheetApp.getActive().getId();
  const url = 'https://docs.google.com/spreadsheets/d/' + ssId + '/export?format=xlsx';
  const token = ScriptApp.getOAuthToken();
  const resp = UrlFetchApp.fetch(url, {headers:{Authorization:'Bearer ' + token}});
  const file = DriveApp.createFile(resp.getBlob().setName('export.xlsx'));
  Logger.log(file.getUrl());
}
