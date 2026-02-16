// 195) Fetch JSON with timeout + error handling
function ex195_fetchJson() {
  const url='https://httpbin.org/json';
  const resp=UrlFetchApp.fetch(url, {muteHttpExceptions:true, followRedirects:true});
  if(resp.getResponseCode()>=400) throw new Error(resp.getContentText());
  const json=JSON.parse(resp.getContentText());
  Logger.log(json);
}
