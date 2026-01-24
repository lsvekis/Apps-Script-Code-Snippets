# Apps Script + Gemini — AI Knowledge Base Builder for Google Drive (Issue #10)

Build a lightweight **knowledge base (mini RAG)** inside Google Workspace:

- Index a Google Drive folder of Google Docs
- Extract Doc text (with safe truncation)
- Use Gemini to create searchable summaries + keywords
- Store the index in a Google Sheet tab: `KB_Index`
- Ask questions from a sidebar and get answers **with citations** (Doc title + link)

## What you'll need

- A Google Sheet (this script is **container-bound** to the Sheet)
- A Drive folder containing Google Docs you want to index
- A Gemini API key

## Setup

1. Open a Google Sheet.
2. Create a tab named **KB_Index** with these headers in row 1:

   | docId | title | url | summary | keywords | updatedAt |
   |------:|-------|-----|---------|----------|----------|

3. Go to **Extensions → Apps Script**.
4. Replace the default project with:
   - `appsscript.json`
   - all files under `src/`
5. In `src/GeminiHelpers.gs`, set your `GEMINI_API_KEY`.
6. Run `testGeminiConnection()` to authorize.
7. Reload the Sheet and use the menu:
   - **AI Tools → KB Builder (Index Folder)**
   - **AI Tools → KB Q&A (Ask)**

## Usage

### Index a folder
- Paste a Drive **folder ID** into the KB Builder sidebar.
- Click **Index Folder**.
- The script will add/refresh rows in `KB_Index`.

### Ask questions
- Use the KB Q&A sidebar.
- Ask a question.
- Gemini answers using the top-matched sources and includes citations.

## Notes / Safety

- This uses a simple keyword scoring approach (no embeddings).
- Doc text is truncated to keep prompts small.
- For larger docs, add chunking (exercise upgrade).

## Files

- `appsscript.json` — scopes
- `src/Code.gs` — menus + sidebars
- `src/Sidebar_Index.html` — index UI
- `src/Sidebar_Ask.html` — Q&A UI
- `src/GeminiHelpers.gs` — Gemini helper + test
- `src/DocUtils.gs` — Drive/Docs helpers
- `src/KbIndexer.gs` — indexing logic
- `src/KbGemini.gs` — summarizer + keywords
- `src/KbAsk.gs` — retrieval + answer generation
- `src/SetupAndTests.gs` — basic tests
