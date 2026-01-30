# Apps Script + Gemini — AI Email Draft Assistant for Gmail (Issue #11)

This project adds a **Gmail Draft Assistant** to Google Sheets using Google Apps Script + Gemini.

It can:
- Search Gmail with a query (e.g., `in:inbox newer_than:7d`)
- Load the latest matching thread
- Strip quoted reply text (basic heuristics)
- Ask Gemini to generate a **structured JSON** response:
  - reply draft
  - action items
  - subject line options
- Display the result in a sidebar (human-in-the-loop)

> This project does **NOT** send emails automatically.

## Setup

1. Open a Google Sheet.
2. Go to **Extensions → Apps Script**.
3. Replace the default project with:
   - `appsscript.json`
   - all files under `src/`
4. In `src/GeminiHelpers.gs` set:
   - `GEMINI_API_KEY`
5. Run `testGeminiConnection()` once to authorize external requests.
6. Reload the Sheet → **AI Tools → Gmail Draft Assistant**.

## Testing queries

Start with:
- `in:inbox newer_than:7d`

Then try:
- `from:someone@domain.com newer_than:30d`
- `subject:"invoice" newer_than:90d`

## Files

- `appsscript.json`
- `src/Code.gs`
- `src/Sidebar.html`
- `src/GeminiHelpers.gs`
- `src/GmailReader.gs`
- `src/DraftAssistant.gs`
- `src/SetupAndTests.gs`
