// 178) Create a Slides deck from a list of titles
function ex178_slidesFromList() {
  const titles=['Intro','Problem','Solution','Demo','Next Steps'];
  const pres=SlidesApp.create('Outline Deck ' + Date.now());
  titles.forEach(t=>{
    const s=pres.appendSlide(SlidesApp.PredefinedLayout.TITLE_ONLY);
    s.getPlaceholder(SlidesApp.PlaceholderType.TITLE).asShape().getText().setText(t);
  });
  pres.getSlides()[0].remove();
  Logger.log(pres.getUrl());
}
