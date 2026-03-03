function ex234_fetchWithRetry(url, attempts) {
  for (let i=1;i<=attempts;i++) {
    try {
      return UrlFetchApp.fetch(url, {muteHttpExceptions:true});
    } catch (err) {
      if (i === attempts) throw err;
      Utilities.sleep(500 * i);
    }
  }
}
