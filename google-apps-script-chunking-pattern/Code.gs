/**
 * Run ONCE to start the chunked process.
 */
function convertBulletsStart() {
  const props = PropertiesService.getDocumentProperties();
  props.deleteProperty("INDEX");

  // Remove old triggers
  ScriptApp.getProjectTriggers().forEach(t => {
    if (t.getHandlerFunction() === "convertBulletsStep") {
      ScriptApp.deleteTrigger(t);
    }
  });

  convertBulletsStep();
}

/**
 * Processes a small chunk of list items per execution.
 */
function convertBulletsStep() {
  const lock = LockService.getDocumentLock();
  if (!lock.tryLock(15000)) return;

  try {
    const doc = DocumentApp.getActiveDocument();
    const body = doc.getBody();
    const props = PropertiesService.getDocumentProperties();

    let i = Number(props.getProperty("INDEX"));
    if (!Number.isFinite(i)) i = body.getNumChildren() - 1;

    const MAX_ITEMS = 30;       // safe chunk size
    const MAX_MS = 45 * 1000;   // 45 second time budget
    const start = Date.now();

    let processed = 0;

    while (
      i >= 0 &&
      processed < MAX_ITEMS &&
      (Date.now() - start) < MAX_MS
    ) {
      const el = body.getChild(i);

      if (el.getType() === DocumentApp.ElementType.LIST_ITEM) {
        const li = el.asListItem();
        const text = li.getText().trim();

        if (text === "") {
          body.removeChild(li);
        } else {
          const p = body.insertParagraph(i, "- " + text);
          p.setAttributes(li.getAttributes());
          body.removeChild(li);
        }

        processed++;
      }

      i--;
    }

    props.setProperty("INDEX", String(i));

    if (i >= 0) {
      ScriptApp.newTrigger("convertBulletsStep")
        .timeBased()
        .after(30 * 1000)
        .create();
    } else {
      props.deleteProperty("INDEX");
      DocumentApp.getUi().alert("Done! All bullets converted.");
    }

  } finally {
    lock.releaseLock();
  }
}