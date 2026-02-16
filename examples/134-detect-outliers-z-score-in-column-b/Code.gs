// 134) Detect outliers (z-score) in column B
function ex134_detectOutliers() {
  const sh = SpreadsheetApp.getActiveSheet();
  const vals = sh.getRange('B2:B' + sh.getLastRow()).getValues().flat().map(Number).filter(v=>!isNaN(v));
  const mean = vals.reduce((a,b)=>a+b,0)/Math.max(vals.length,1);
  const sd = Math.sqrt(vals.reduce((s,v)=>s+Math.pow(v-mean,2),0)/Math.max(vals.length,1));
  const r = sh.getRange('B2:B' + sh.getLastRow());
  const out = r.getValues().map(([v])=>{
    const n=Number(v); if(isNaN(n)||sd===0) return [''];
    const z=(n-mean)/sd;
    return [Math.abs(z)>=3 ? 'OUTLIER' : ''];
  });
  sh.getRange(2,3,out.length,1).setValues(out); // write to col C
}
