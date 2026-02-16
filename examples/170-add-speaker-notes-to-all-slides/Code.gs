// 170) Add speaker notes to all slides
function ex170_addSpeakerNotes() {
  const pres=SlidesApp.getActivePresentation();
  pres.getSlides().forEach((s,i)=>{
    s.getNotesPage().getSpeakerNotesShape().getText().setText('Notes for slide ' + (i+1));
  });
}
