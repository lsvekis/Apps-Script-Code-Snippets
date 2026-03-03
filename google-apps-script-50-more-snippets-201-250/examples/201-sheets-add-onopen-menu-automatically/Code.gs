function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Toolkit')
    .addItem('Run Daily Cleanup', 'ex212_dailyCleanup')
    .addItem('Export Sheet to PDF', 'ex235_exportActiveSheetAsPdf')
    .addToUi();
}
