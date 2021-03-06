const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const swaggerDocument = require('./swagger.json');

const app = express();

// API logs
app.use(logger('dev'));
// enable cors
app.use(cors());

app.disable('x-powered-by');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(cookieParser());

// documentation route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Import routes
app.use('/', require('./routes'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    message: 'error',
    error: err.message
  });
});

module.exports = app;
