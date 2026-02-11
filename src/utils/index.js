const crypto = require("crypto-js");

module.exports = {
  encryptPassword: (password) => {
    return crypto.AES.encrypt(password, process.env.SECRET_KEY).toString();
  },
  decryptPassword: (password) => {
    const bytes = crypto.AES.decrypt(password, process.env.SECRET_KEY);
    return bytes.toString(crypto.enc.Utf8);
  },
};

module.exports.jwtSign = (user) => {};
