function ex229_createForm() {
  const form = FormApp.create('Intake Form ' + Date.now());
  form.addTextItem().setTitle('Name').setRequired(true);
  form.addTextItem().setTitle('Email').setRequired(true);
  form.addMultipleChoiceItem().setTitle('Priority').setChoices([
    form.createChoice('Low'), form.createChoice('Medium'), form.createChoice('High')
  ]);
  Logger.log(form.getEditUrl());
}
