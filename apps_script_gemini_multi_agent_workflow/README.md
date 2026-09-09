# AI Multi-Agent Workflow for Google Workspace

Issue #32 of the **Apps Script + Gemini Mastery** series.

This project demonstrates a multi-agent AI workflow using Google Apps Script and Gemini. Apps Script orchestrates specialized agents for research, analysis, reporting, review, and revision.

## Workflow

```text
Google Sheets Data
        ↓
Research Agent
        ↓
Analysis Agent
        ↓
Report Agent
        ↓
Review Agent
   ↙          ↘
Revise       PASS
   ↓           ↓
Final Review  Google Doc
```

## Agents

- Research Agent — structures facts and limitations
- Analysis Agent — identifies insights and actions
- Report Agent — creates the executive report
- Review Agent — checks grounding and quality
- Revision Agent — revises once when needed

## Setup

1. Open a Google Sheet and go to Extensions > Apps Script.
2. Add the files from `src/`.
3. Replace the manifest with `appsscript.json`.
4. In Project Settings > Script Properties add `GEMINI_API_KEY`.
5. Reload the spreadsheet.
6. Use **AI Tools > Multi-Agent Report**.

The project reads up to 100 rows from the active sheet and limits the review loop to one revision.
