# AI Automation Agent for Google Workspace

Issue #31 of Apps Script + Gemini Mastery.

Gemini plans a workflow from a natural-language request. Apps Script validates the requested tools, presents the plan for approval, and executes only registered functions.

## Tools
- readSheetData
- analyzeData
- createGoogleDoc
- createGmailDraft (prepares content; does not send)

## Setup
1. Add these files to a Google Sheets Apps Script project.
2. Set `GEMINI_API_KEY` in Project Settings > Script Properties.
3. Reload the spreadsheet.
4. Use AI Tools > AI Automation Agent.

The project intentionally uses controlled tools and user approval rather than arbitrary AI-generated code execution.
