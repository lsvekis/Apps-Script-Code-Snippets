function ex232_withLockDemo() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    Logger.log('Running safely...');
  } finally {
    lock.releaseLock();
  }
}
