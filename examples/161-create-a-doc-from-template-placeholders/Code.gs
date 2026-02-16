// 161) Create a Doc from template placeholders
function ex161_docTemplateFromMap() {
  const templateId='PASTE_TEMPLATE_DOC_ID';
  const copy=DriveApp.getFileById(templateId).makeCopy('Generated Doc ' + Date.now());
  const doc=DocumentApp.openById(copy.getId());
  const body=doc.getBody();
  const map={'{{TITLE}}':'Automation Report','{{AUTHOR}}':'Lars','{{DATE}}':new Date().toDateString()};
  Object.entries(map).forEach(([k,v])=>body.replaceText(k, String(v)));
  doc.saveAndClose();
  Logger.log(doc.getUrl());
}
