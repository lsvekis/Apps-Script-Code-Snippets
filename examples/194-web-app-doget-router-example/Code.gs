// 193) Web app JSON response helper
function ex193_json(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// 194) Web app doGet router example
function doGet(e) {
  const route = (e.parameter.route || 'ping').toLowerCase();
  if (route === 'ping') return ex193_json({ok:true, route, time:new Date().toISOString()});
  if (route === 'echo') return ex193_json({ok:true, query:e.parameter});
  return ex193_json({ok:false, error:'unknown route'});
}
