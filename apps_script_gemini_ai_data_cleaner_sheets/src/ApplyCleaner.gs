/**
 * Apply cleaning actions to the active range.
 * Note: operates directly on the selected range in the active sheet.
 */
function applyCleaning_(actions) {
  const range = SpreadsheetApp.getActiveRange();
  const values = range.getValues();

  // Helper: normalize dates best-effort for common strings.
  function normalizeDate_(v) {
    if (v instanceof Date) return v;
    if (typeof v !== "string") return v;
    const s = v.trim();
    if (!s) return v;

    const ms = Date.parse(s);
    if (!isNaN(ms)) return new Date(ms);

    const m = s.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{2,4})$/);
    if (m) {
      let a = parseInt(m[1], 10);
      let b = parseInt(m[2], 10);
      let y = parseInt(m[3], 10);
      if (y < 100) y += 2000;

      let month = (a > 12) ? b : a;
      let day   = (a > 12) ? a : b;

      const d = new Date(y, month - 1, day);
      if (!isNaN(d.getTime())) return d;
    }

    return v;
  }

  // Apply transformations (skip header row 0).
  actions.forEach(action => {
    const type = action.type;

    if (type === "remove_duplicates") return;

    const col = action.column;
    if (col === undefined || col === null || col < 0) return;

    for (let r = 1; r < values.length; r++) {
      let cell = values[r][col];

      switch (type) {
        case "trim":
          if (typeof cell === "string") values[r][col] = cell.trim();
          break;
        case "lowercase":
          if (typeof cell === "string") values[r][col] = cell.toLowerCase();
          break;
        case "uppercase":
          if (typeof cell === "string") values[r][col] = cell.toUpperCase();
          break;
        case "normalize_date":
          values[r][col] = normalizeDate_(cell);
          break;
      }
    }
  });

  // Remove duplicates across full row (excluding header)
  const wantsDedupe = actions.some(a => a.type === "remove_duplicates");
  if (wantsDedupe) {
    const header = values[0];
    const body = values.slice(1);

    const seen = new Set();
    const deduped = [];

    body.forEach(row => {
      const key = JSON.stringify(row);
      if (!seen.has(key)) {
        seen.add(key);
        deduped.push(row);
      }
    });

    const newValues = [header].concat(deduped);

    range.clearContent();
    range.offset(0, 0, newValues.length, newValues[0].length).setValues(newValues);
    return;
  }

  range.setValues(values);
}
