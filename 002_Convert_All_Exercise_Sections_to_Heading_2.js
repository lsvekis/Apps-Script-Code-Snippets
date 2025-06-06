function convertExercisesToHeading2() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var totalParas = body.getNumChildren(); 
 
  for (var i = 0; i < totalParas; i++) { 
    var element = body.getChild(i); 
    if (element.getType() == DocumentApp.ElementType.PARAGRAPH) { 
      var para = element.asParagraph(); 
Laurence Svekis Learn More https://basescripts.com/  
      var text = para.getText(); 
      if (/^Exercise\s+\d+:/i.test(text)) { 
        para.setHeading(DocumentApp.ParagraphHeading.HEADING2); 
      }
