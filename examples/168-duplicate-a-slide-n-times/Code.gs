// 168) Duplicate a slide N times
function ex168_duplicateSlideNTimes() {
  const pres=SlidesApp.getActivePresentation();
  const slide=pres.getSlides()[0];
  for(let i=0;i<5;i++) pres.appendSlide(slide);
}
