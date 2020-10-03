const app = require('./config/express');
const logger = require('./config/logger');
const { NODE_ENV, HOST, PORT } = require('./config/env');

const server = app.listen(PORT, () => {
  logger.info(`Server running on http://${HOST}:${PORT} [${NODE_ENV}]`);
});

module.exports = server;
