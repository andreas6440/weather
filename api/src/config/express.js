const express = require('express');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const methodOverride = require('method-override');
const morgan = require('morgan');
const { NODE_ENV } = require('./env');
const routes = require('../router');

const app = express();

let morganFormat = 'dev';
if (NODE_ENV === 'production') morganFormat = 'combined';

app.use(
  morgan(morganFormat, {
    skip: (req, res) => res.statusCode < 400,
    stream: process.stderr,
  }),
);

app.use(
  morgan(morganFormat, {
    skip: (req, res) => res.statusCode >= 400,
    stream: process.stdout,
  }),
);

app.use(compression());
app.use(cors());
app.use(helmet());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use('/api', routes);

module.exports = app;
