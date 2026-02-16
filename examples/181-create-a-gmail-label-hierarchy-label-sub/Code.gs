// 181) Create a Gmail label hierarchy (Label/Sub)
function ex181_createNestedLabel() {
  const name='Automation/Processed';
  const label=GmailApp.getUserLabelByName(name) || GmailApp.createLabel(name);
  Logger.log(label.getName());
}
