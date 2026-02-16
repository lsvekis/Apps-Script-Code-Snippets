// 175) Create a “meeting minutes” doc template
function ex175_meetingMinutesDoc() {
  const doc=DocumentApp.create('Meeting Minutes ' + new Date().toDateString());
  const b=doc.getBody();
  b.appendParagraph('Meeting Minutes').setHeading(DocumentApp.ParagraphHeading.HEADING1);
  b.appendParagraph('Attendees:');
  b.appendParagraph('Agenda:');
  b.appendParagraph('Decisions:');
  b.appendParagraph('Action Items:');
  Logger.log(doc.getUrl());
}
