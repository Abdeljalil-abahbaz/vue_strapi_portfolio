const crypto = require("crypto");

// Generate a random secret for authentication JWT
const generateAuthSecret = () => {
  return crypto.randomBytes(64).toString("hex");
};

// Generate a random salt for API tokens
const generateAPITokenSalt = () => {
  return crypto.randomBytes(16).toString("base64");
};

// Generate a random salt for transfer tokens
const generateTransferTokenSalt = () => {
  return crypto.randomBytes(16).toString("base64");
};

// Generate the values
const adminSecret = generateAuthSecret();
const apiTokenSalt = generateAPITokenSalt();
const transferTokenSalt = generateTransferTokenSalt();
module.exports = ({ env }) => ({
  auth: {
    secret: adminSecret,
  },
  apiToken: {
    salt: apiTokenSalt,
  },
  transfer: {
    token: {
      salt: transferTokenSalt,
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});
