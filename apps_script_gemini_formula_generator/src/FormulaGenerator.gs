
function generateFormula(userRequest){

if(!userRequest) return "Enter a request."

const context = getSheetContext_()

const prompt = `
You are an expert Google Sheets formula generator.

Sheet name:
${context.sheetName}

Headers:
${context.headers.join(", ")}

User request:
${userRequest}

Return ONLY the formula.
No explanation.
Use correct Google Sheets syntax.
`

let result

try{

result = callGemini(prompt,"")

}catch(e){

return "Gemini error: "+e

}

return result.trim()

}

function insertFormula(formula){

const cell = SpreadsheetApp.getActiveCell()

if(!formula.startsWith("="))
formula = "=" + formula

cell.setFormula(formula)

return "Formula inserted."

}
