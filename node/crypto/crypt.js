const { encrypt, decrypt } = require('./cryptoUtil');

const userId = 'kenu.heo';
const encrypted = encrypt(userId);
console.log('enc', encrypted);

const decrypted = decrypt(encrypted);
console.log('dec', decrypted);
