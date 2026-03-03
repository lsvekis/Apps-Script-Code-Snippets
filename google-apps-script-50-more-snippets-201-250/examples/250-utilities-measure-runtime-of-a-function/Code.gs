function ex250_timedRun() {
  const start = Date.now();
  Utilities.sleep(200);
  const ms = Date.now() - start;
  Logger.log('Runtime ms: ' + ms);
}
