// 189) Store and retrieve user preferences (UserProperties)
function ex189_userPrefs() {
  const props=PropertiesService.getUserProperties();
  props.setProperty('theme','dark');
  Logger.log(props.getProperty('theme'));
}
