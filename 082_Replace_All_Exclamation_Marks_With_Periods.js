function exclamationsToPeriods() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var text = body.getText().replace(/!/g, '.'); 
  body.setText(text); 
Laurence Svekis Learn More https://basescripts.com/  
}
