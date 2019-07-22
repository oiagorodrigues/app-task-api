'use strict'

const express = require('express');
const logger = require('morgan');
const cors = require('cors')
let mongoose = require('./database/connection')

const app = express();
app.use(cors());

// log middleware to every request
app.use(logger('dev'));

// as for express 4.16+, there is no need to install `body-parser` anymore,
// express already do that;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use(require('./middlewares'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// error handler
app.use((error, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = error.message;
  res.locals.error = req.app.get('env') === 'development' ? error : {};

  res.status(error.status || 500);
  res.json({...error});
});

module.exports = app;
