function keepFirstTableOnly() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var foundFirst = false; 
  for (var i = body.getNumChildren() - 1; i >= 0; i--) { 
    var child = body.getChild(i); 
    if (child.getType() == DocumentApp.ElementType.TABLE) { 
      if (!foundFirst) { 
        foundFirst = true; 
      } else { 
        body.removeChild(child); 
      }
