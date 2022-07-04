const { shopsController } = require('./shop.controller');
const { productsController } = require('./product.controller');
const { ordersController } = require('./order.controller');

exports.shopsController = shopsController;
exports.productsController = productsController;
exports.ordersController = ordersController;
