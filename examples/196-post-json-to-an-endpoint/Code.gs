// 196) Post JSON to an endpoint
function ex196_postJson() {
  const url='https://httpbin.org/post';
  const payload={event:'test', at:new Date().toISOString()};
  const resp=UrlFetchApp.fetch(url,{
    method:'post',
    contentType:'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions:true
  });
  Logger.log(resp.getContentText());
}
