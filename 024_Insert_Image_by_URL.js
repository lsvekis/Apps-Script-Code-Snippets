function insertImageByUrl() { 
  var url = 
'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color
_272x92dp.png'; 
  var imgBlob = UrlFetchApp.fetch(url).getBlob(); 
  DocumentApp.getActiveDocument().getBody().appendImage(imgBlob); 
}
