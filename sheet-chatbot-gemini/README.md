# Sheet Chatbot with Google Apps Script + Gemini

A production-ready Google Sheets chatbot that answers questions using only data from a selected spreadsheet tab.

## Features

- Sidebar chatbot inside Google Sheets
- Reads data from one selected tab
- Filters relevant rows before sending to Gemini
- Grounded prompt to keep answers limited to sheet data
- Optional row citations
- User chat history
- Spreadsheet-level settings

## Project structure

```text
sheet-chatbot-gemini/
├── appsscript.json
├── .clasp.json.example
├── .gitignore
├── README.md
└── src/
    ├── Code.gs
    ├── Config.gs
    ├── Gemini.gs
    ├── SheetData.gs
    ├── index.html
    ├── scripts.html
    └── styles.html
```

## Setup

### 1. Create a Google Apps Script project bound to a Google Sheet
Open your target Google Sheet, then go to **Extensions → Apps Script**.

### 2. Add the source files
Copy the contents of the `src/` folder into your Apps Script project.

### 3. Add your Gemini API key
In Apps Script:

- Open **Project Settings**
- Under **Script Properties**, add:
  - Key: `GEMINI_API_KEY`
  - Value: your Gemini API key

### 4. Initialize settings
Run `initializeSettings()` once in the Apps Script editor.

### 5. Reload the spreadsheet
Use the custom menu:

**Sheet Chatbot → Open Chatbot**

## How it works

1. Reads data from the selected sheet tab.
2. Scores rows based on the user’s question.
3. Sends only the most relevant rows to Gemini.
4. Uses a grounded prompt so Gemini answers only from sheet data.
5. Returns a fallback when the answer is not supported by the sheet.

## Recommended sheet format

- First row contains headers
- One record per row
- No merged cells
- Clean, consistent data

Example:

| Employee | Department | Status | Location |
|----------|------------|--------|----------|
| Anna     | HR         | Active | Toronto  |
| John     | Sales      | Leave  | Calgary  |

## Deploying with clasp

Install clasp:

```bash
npm install -g @google/clasp
```

Login:

```bash
clasp login
```

Copy the sample config and update it with your Script ID:

```bash
cp .clasp.json.example .clasp.json
```

Push the project:

```bash
clasp push
```

## Next upgrades

- Deterministic count/list/filter handlers in Apps Script
- Multi-tab routing
- Hidden audit log sheet
- Tab allow/block lists
- Column-aware filtering
