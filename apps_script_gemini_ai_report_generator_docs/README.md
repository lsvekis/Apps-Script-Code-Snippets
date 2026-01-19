# Apps Script + Gemini — AI Report Generator for Google Docs (Issue #9)

This project adds an **AI Report Generator** to Google Sheets using Google Apps Script + Gemini.

It can:
- Read data from the active sheet (headers + rows)
- Ask Gemini to produce a **structured report** in JSON
- Create a new Google Doc with:
  - Title
  - Executive summary
  - Multiple formatted sections

## Setup

1. Open a Google Sheet.
2. Go to **Extensions → Apps Script**.
3. Replace the default project with:
   - `appsscript.json`
   - All files from `src/`
4. In `src/GeminiHelpers.gs`, set:
   - `GEMINI_API_KEY` to your Gemini API key.
5. Run `testGeminiConnection()` once to authorize.
6. Reload the Sheet and use:
   - **AI Tools → Generate AI Report**

## Usage

1. Ensure your sheet has headers in row 1 and data rows below.
2. Open **AI Tools → Generate AI Report**.
3. Choose:
   - Audience (e.g., Executives, Managers, Clients)
   - Tone (Executive Summary, Technical Analysis, Plain Language)
4. Click **Generate Report**.
5. The script creates a Google Doc and returns the URL.

## Files

- `appsscript.json` — scopes + manifest
- `src/Code.gs` — menu + sidebar entry
- `src/Sidebar.html` — UI
- `src/GeminiHelpers.gs` — Gemini helper + test
- `src/DataReader.gs` — reads and summarizes sheet data
- `src/ReportGenerator.gs` — Gemini prompt + JSON parsing + orchestration
- `src/DocWriter.gs` — writes formatted report to Google Docs
- `src/SetupAndTests.gs` — optional test helpers

> Tip: Start with a small dataset while validating prompts.
