function ex231_setApiKey() {
  PropertiesService.getScriptProperties().setProperty('API_KEY', 'PASTE_KEY');
}
function ex231_getApiKey() {
  return PropertiesService.getScriptProperties().getProperty('API_KEY');
}
