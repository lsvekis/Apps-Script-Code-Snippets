function ex223_linesToBullets() {
  const lines = 'One\nTwo\nThree'.split('\n');
  const doc = DocumentApp.create('Bullets ' + Date.now());
  const b = doc.getBody();
  lines.forEach(t => b.appendListItem(t).setGlyphType(DocumentApp.GlyphType.BULLET));
  Logger.log(doc.getUrl());
}
