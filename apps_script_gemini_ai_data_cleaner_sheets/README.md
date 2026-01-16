# Apps Script + Gemini — AI Data Cleaner for Google Sheets (Issue #8)

This project adds an **AI Data Cleaner** to Google Sheets using Google Apps Script + Gemini.

It can:
- Analyze the selected range (table-like data)
- Ask Gemini to return **structured JSON cleaning actions**
- Apply cleaning actions back to the sheet (safe, predictable operations)

## Setup

1. Open a Google Sheet.
2. Go to **Extensions → Apps Script**.
3. Replace the default project with:
   - `appsscript.json`
   - Files inside `src/`
4. In `src/GeminiHelpers.gs`, set:
   - `GEMINI_API_KEY` to your Gemini API key.
5. Run `testGeminiConnection()` once to authorize.
6. Reload the Sheet, then use:
   - **AI Tools → AI Data Cleaner**

## Usage

1. Select a range that includes headers in row 1.
2. Open the sidebar (**AI Tools → AI Data Cleaner**).
3. Enter cleaning instructions (e.g., "Trim spaces, lowercase emails, normalize dates, remove duplicates").
4. Click **Analyze & Clean**.
5. The tool applies supported cleaning actions.

## Supported Cleaning Actions (v1)

Gemini returns JSON like:

```json
{
  "actions": [
    { "type": "trim", "column": 2 },
    { "type": "lowercase", "column": 3 },
    { "type": "uppercase", "column": 1 },
    { "type": "normalize_date", "column": 4 },
    { "type": "remove_duplicates" }
  ]
}
```

Actions implemented in this repo:
- `trim` (string)
- `lowercase` (string)
- `uppercase` (string)
- `normalize_date` (best-effort for common date strings)
- `remove_duplicates` (removes duplicate rows based on all columns)

> Tip: Start with a small sample range while testing.

## Files

- `appsscript.json`
- `src/Code.gs` — menu + sidebar
- `src/Sidebar.html` — UI
- `src/GeminiHelpers.gs` — Gemini helper + test
- `src/DataReader.gs` — reads selected range
- `src/DataCleaner.gs` — Gemini prompt + parsing
- `src/ApplyCleaner.gs` — applies actions
- `src/SetupAndTests.gs` — extra tests
