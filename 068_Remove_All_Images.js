function removeAllImages() { 
  var body = DocumentApp.getActiveDocument().getBody(); 
  var imgs = body.getImages(); 
  for (var i = imgs.length - 1; i >= 0; i--) { 
    var parent = imgs[i].getParent(); 
    if (parent) parent.removeChild(imgs[i]); 
  }
