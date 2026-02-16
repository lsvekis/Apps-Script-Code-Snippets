// 128) Lock a range for 10 minutes (soft lock via cache)
function ex128_softLock() {
  const cache = CacheService.getScriptCache();
  const key = 'LOCK:PROCESS';
  if (cache.get(key)) throw new Error('Locked: try again later.');
  cache.put(key, '1', 600);
  // ... do work ...
}
