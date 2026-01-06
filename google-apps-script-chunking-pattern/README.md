# Google Apps Script Chunking Pattern
Avoid "Exceeded maximum execution time" errors by chunking long-running Apps Script jobs.

## What this repo shows
- How to safely chunk long-running Google Apps Script code
- How to store progress between runs
- How to resume work using time-based triggers
- A real-world Google Docs example

## How to use
1. Create a new Google Apps Script project
2. Copy the contents of `Code.gs` into the project
3. Open a Google Doc
4. Run `convertBulletsStart()` once
5. The script will continue automatically until finished

## Why chunking works
Google Apps Script has strict execution limits. Chunking allows you to:
- Process work in small batches
- Stop before the timeout
- Resume automatically

## Customize
Inside `Code.gs` you can tune:
- MAX_ITEMS
- MAX_MS
- Trigger delay

## License
MIT