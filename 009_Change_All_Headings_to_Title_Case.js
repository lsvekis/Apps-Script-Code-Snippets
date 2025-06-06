function headingsToTitleCase() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var total = body.getNumChildren(); 
  for (var i = 0; i < total; i++) { 
    var elem = body.getChild(i); 
    if (elem.getType() == DocumentApp.ElementType.PARAGRAPH) { 
      var para = elem.asParagraph(); 
      var heading = para.getHeading(); 
      if (heading != DocumentApp.ParagraphHeading.NORMAL) { 
        var txt = para.getText(); 
Laurence Svekis Learn More https://basescripts.com/  
        var newTxt = txt.replace(/\w\S*/g, w => 
w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()); 
        para.setText(newTxt); 
      }
