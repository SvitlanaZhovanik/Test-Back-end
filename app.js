const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { shopsRouter, productsRouter, ordersRouter } = require('./src/routes');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(express.json());
app.use(cors());
app.use(morgan(formatsLogger));

app.use('/api/shops', shopsRouter);
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

app.use((err, req, res, next) => {
  const statusCode = err.status ?? 500;
  res.status(statusCode).send({ message: err.message });
});

module.exports = app;
