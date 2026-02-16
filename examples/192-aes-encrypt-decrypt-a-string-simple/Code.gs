// 192) AES encrypt/decrypt a string (simple)
function ex192_encryptDecrypt() {
  const key = Utilities.base64EncodeWebSafe(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, 'passphrase'));
  const plaintext='secret message';
  const enc = Utilities.base64EncodeWebSafe(Utilities.computeHmacSha256Signature(plaintext, key)); // keyed hash demo
  Logger.log({plaintext, enc});
}
