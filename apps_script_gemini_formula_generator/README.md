
# AI Spreadsheet Formula Generator (Apps Script + Gemini)

Generate Google Sheets formulas from plain English using Google Apps Script and Gemini.

## Features
- Describe the formula you want in natural language
- Gemini generates the correct Google Sheets formula
- Optional insertion directly into the selected cell
- Works from a sidebar inside Google Sheets

## Example Requests
- "Sum column B where column C = Closed"
- "Count rows where status column equals Active"
- "Filter rows where region equals Canada"
- "Average revenue by salesperson"

## Setup

1. Open a Google Sheet
2. Go to **Extensions → Apps Script**
3. Replace the project files with those in this repo
4. Add your Gemini API key in `GeminiHelpers.gs`
5. Run `testGeminiConnection()` once to authorize
6. Reload the sheet

Menu:
**AI Tools → Formula Generator**
