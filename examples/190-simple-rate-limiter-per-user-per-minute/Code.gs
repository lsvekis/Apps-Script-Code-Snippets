// 190) Simple rate limiter (per user per minute)
function ex190_rateLimitPerMinute() {
  const props=PropertiesService.getUserProperties();
  const key='lastCall';
  const last=Number(props.getProperty(key) || 0);
  const now=Date.now();
  if(now-last < 60*1000) throw new Error('Rate limited. Try again in a minute.');
  props.setProperty(key, String(now));
}
