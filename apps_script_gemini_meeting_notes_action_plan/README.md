# Apps Script + Gemini — AI Meeting Notes → Action Plan for Google Docs (Issue #12)

Turn messy meeting notes in a Google Doc into:
- Summary
- Decisions
- Action items (owner + due when possible)
- Open questions
- Risks

This tool runs from a **Google Sheet sidebar** (human-in-the-loop).

## What you need
- A Google Sheet (container-bound Apps Script project)
- A Google Doc containing meeting notes (paste its Doc ID)
- A Gemini API key

## Setup
1. Open a Google Sheet → **Extensions → Apps Script**
2. Replace the default project with:
   - `appsscript.json`
   - everything in `src/`
3. In `src/GeminiHelpers.gs`, set:
   - `GEMINI_API_KEY = "YOUR_API_KEY_HERE"`
4. Run `testGeminiConnection()` once and authorize scopes.
5. Reload the Sheet → **AI Tools → Meeting Notes → Action Plan**
6. Paste your meeting-notes **Doc ID** into the sidebar and run.

## Output
- A new Google Doc is created titled:
  **Action Plan — <original meeting notes title>**
- The sidebar returns the Doc URL.

## Notes
- Meeting notes are truncated to keep prompts smaller.
- Gemini is required to return **JSON ONLY**; if Gemini returns non-JSON, check Logs.

## Files
- `appsscript.json` — scopes for Sheets UI, Docs, Drive file create, external request
- `src/Code.gs` — menu + sidebar
- `src/Sidebar.html` — UI
- `src/GeminiHelpers.gs` — Gemini helper + test
- `src/DocReader.gs` — reads meeting notes text
- `src/MeetingAnalyzer.gs` — Gemini prompt + JSON parsing
- `src/DocWriter.gs` — creates formatted Action Plan doc
- `src/MeetingProcessor.gs` — orchestration
- `src/SetupAndTests.gs` — test helpers
