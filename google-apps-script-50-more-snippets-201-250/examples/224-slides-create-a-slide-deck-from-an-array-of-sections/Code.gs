function ex224_deckFromSections() {
  const sections = [
    {title:'Intro', bullets:['Goal','Context']},
    {title:'Plan', bullets:['Step 1','Step 2','Step 3']},
  ];
  const pres = SlidesApp.create('Sections Deck ' + Date.now());
  pres.getSlides()[0].remove();
  sections.forEach(s => {
    const slide = pres.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
    slide.getPlaceholder(SlidesApp.PlaceholderType.TITLE).asShape().getText().setText(s.title);
    slide.getPlaceholder(SlidesApp.PlaceholderType.BODY).asShape().getText().setText('• ' + s.bullets.join('\n• '));
  });
  Logger.log(pres.getUrl());
}
