// 174) Insert a page break after each Heading 2
function ex174_pageBreakAfterH2() {
  const doc=DocumentApp.getActiveDocument();
  const body=doc.getBody();
  const pars=body.getParagraphs();
  for(let i=pars.length-1;i>=0;i--){
    if(pars[i].getHeading()===DocumentApp.ParagraphHeading.HEADING2){
      body.insertPageBreak(body.getChildIndex(pars[i])+1);
    }
  }
}
