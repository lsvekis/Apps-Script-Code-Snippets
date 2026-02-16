// 177) Add a table with styled header row
function ex177_docTableWithHeaderStyle() {
  const doc=DocumentApp.create('Styled Table ' + Date.now());
  const body=doc.getBody();
  const table=body.appendTable([['Name','Score'],['Ava','95'],['Noah','88']]);
  const header=table.getRow(0);
  for(let i=0;i<header.getNumCells();i++){
    header.getCell(i).setBackgroundColor('#e5e7eb');
    header.getCell(i).editAsText().setBold(true);
  }
  Logger.log(doc.getUrl());
}
