// 169) Replace text across all slides
function ex169_replaceTextInSlides() {
  const pres=SlidesApp.getActivePresentation();
  pres.replaceAllText('{{NAME}}', 'Lars');
}
