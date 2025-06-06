function add3x3Table() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  
body.appendTable([['A1','B1','C1'],['A2','B2','C2'],['A3','B3','C3']])
; 
}
