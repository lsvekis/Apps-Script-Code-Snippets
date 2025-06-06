function countImages() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  Logger.log('Image count: ' + body.getImages().length); 
}
