# AI Workspace Command Center

Issue #33 of Apps Script + Gemini Mastery.

A modular Google Apps Script + Gemini command center. The user describes a task, Gemini classifies the intent, Apps Script validates the route, and a registered capability handles the request.

## Capabilities
- ANALYZE_DATA
- SUMMARIZE_DATA
- CREATE_REPORT
- REVIEW_CODE
- PREPARE_EMAIL

## Setup
1. Create/open a Google Sheet.
2. Extensions > Apps Script.
3. Add the files from `src/`.
4. Use the included `appsscript.json`.
5. Project Settings > Script Properties: add `GEMINI_API_KEY`.
6. Reload the spreadsheet.
7. AI Command Center > Open Command Center.

The CREATE_REPORT capability uses a Research → Analysis → Report → Review → optional Revision pipeline.

Email functionality prepares content only and does not send messages.
