// 180) Replace multiple spaces in Slides text shapes
function ex180_slidesNormalizeSpaces() {
  const pres=SlidesApp.getActivePresentation();
  pres.getSlides().forEach(slide=>{
    slide.getPageElements().forEach(el=>{
      if(el.getPageElementType()===SlidesApp.PageElementType.SHAPE){
        const t=el.asShape().getText();
        const s=t.asString();
        t.setText(s.replace(/\s+/g,' ').trim());
      }
    });
  });
}

/***********************
  181–200: Gmail, Calendar, Web, Utilities
************************/
