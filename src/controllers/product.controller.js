const { Product } = require('../models');
const { NotFound } = require('http-errors');

const getProducts = async (req, res) => {
  const id = req.params.shopId;
  const products = await Product.find({ owner: id });
  if (!products) {
    throw new NotFound('Products not found');
  }
  res.status(200).json({
    data: products,
  });
};

exports.productsController = { getProducts };
