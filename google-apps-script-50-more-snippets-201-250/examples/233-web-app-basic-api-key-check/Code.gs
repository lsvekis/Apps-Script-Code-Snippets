function ex233_doGetSecured(e) {
  const key = e.parameter.key || '';
  const expected = PropertiesService.getScriptProperties().getProperty('API_KEY');
  if (!expected || key !== expected) {
    return ContentService.createTextOutput(JSON.stringify({ok:false, error:'unauthorized'}))
      .setMimeType(ContentService.MimeType.JSON);
  }
  return ContentService.createTextOutput(JSON.stringify({ok:true, time:new Date().toISOString()}))
    .setMimeType(ContentService.MimeType.JSON);
}
