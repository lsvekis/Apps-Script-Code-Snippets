// 191) Generate an HMAC signature (Webhook signing)
function ex191_hmacSignature() {
  const secret='CHANGE_ME';
  const payload='hello';
  const sig = Utilities.computeHmacSha256Signature(payload, secret);
  const hex = sig.map(b=>('0'+(b & 0xff).toString(16)).slice(-2)).join('');
  Logger.log(hex);
}
