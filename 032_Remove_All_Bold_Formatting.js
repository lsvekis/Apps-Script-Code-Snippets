function removeAllBold() { 
Laurence Svekis Learn More https://basescripts.com/  
  var text = DocumentApp.getActiveDocument().getBody().editAsText(); 
  text.setBold(false); 
}
