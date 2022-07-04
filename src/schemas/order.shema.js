const joi = require('joi');
const { checkObjectId } = require('../helpers/joi');

const product = joi.object({
  _id: joi.string().custom(checkObjectId).required(),
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
  products: joi.array().items(product).min(1),
});

exports.orderSchema = { order };
