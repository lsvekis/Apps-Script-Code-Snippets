// 198) Build a simple “job queue” using Script Properties
function ex198_enqueueJob() {
  const props=PropertiesService.getScriptProperties();
  const q=JSON.parse(props.getProperty('QUEUE') || '[]');
  q.push({id:Utilities.getUuid(), created:Date.now(), task:'sync'});
  props.setProperty('QUEUE', JSON.stringify(q));
}
function ex198_dequeueJob() {
  const props=PropertiesService.getScriptProperties();
  const q=JSON.parse(props.getProperty('QUEUE') || '[]');
  const job=q.shift();
  props.setProperty('QUEUE', JSON.stringify(q));
  Logger.log(job || 'no jobs');
}
