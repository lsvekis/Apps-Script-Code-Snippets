function listAllImages() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var imgs = body.getImages(); 
  for (var i = 0; i < imgs.length; i++) { 
    Logger.log("Image " + (i + 1) + " found."); 
  }
