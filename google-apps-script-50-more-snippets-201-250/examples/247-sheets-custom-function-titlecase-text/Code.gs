function TITLECASE(text) {
  return String(text || '').toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}
