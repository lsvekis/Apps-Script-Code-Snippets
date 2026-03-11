
function getSheetContext_(){

const sheet = SpreadsheetApp.getActiveSheet()

const headers = sheet
.getRange(1,1,1,sheet.getLastColumn())
.getValues()[0]

return {
sheetName: sheet.getName(),
headers: headers
}

}
