const joi = require('joi');

const product = joi.object({
  id: joi.string().required(),
  name: joi.string().min(1).max(50).required(),
  description: joi.string().required(),
  price: joi.string().required(),
  image: joi.string(),
  amount: joi.number().default(1),
});

const order = joi.object({
  name: joi.string().min(1).max(50).required(),
  email: joi.string().required(),
  phone: joi.string().required(),
  address: joi.string().required(),
  totalPrice: joi.number().required(),
  products: joi.array().items(product).min(1),
});

exports.orderSchema = { order };
