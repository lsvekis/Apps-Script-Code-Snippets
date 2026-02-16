// 167) Create a Slides deck with title slide + agenda
function ex167_createSlidesAgenda() {
  const pres=SlidesApp.create('Agenda Deck ' + Date.now());
  const title=pres.getSlides()[0];
  title.insertShape(SlidesApp.ShapeType.TEXT_BOX, 40, 60, 640, 80).getText().setText('Project Update');
  const agenda=pres.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  agenda.getPlaceholder(SlidesApp.PlaceholderType.TITLE).asShape().getText().setText('Agenda');
  agenda.getPlaceholder(SlidesApp.PlaceholderType.BODY).asShape().getText().setText('• Status\n• Risks\n• Next steps');
  Logger.log(pres.getUrl());
}
