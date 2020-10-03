require('dotenv-safe').config();

const { NODE_ENV, HOST, PORT, LOG_LEVEL } = process.env;

module.exports = {
  NODE_ENV,
  HOST,
  PORT,
  LOG_LEVEL,
};
