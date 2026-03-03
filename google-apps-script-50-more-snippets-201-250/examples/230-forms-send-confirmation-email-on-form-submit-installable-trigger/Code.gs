function ex230_onFormSubmit(e) {
  const resp = e.response;
  const items = resp.getItemResponses();
  const email = items.find(ir => ir.getItem().getTitle() === 'Email')?.getResponse();
  if (email) GmailApp.sendEmail(email, 'We got your submission', 'Thanks! We received your form.');
}
