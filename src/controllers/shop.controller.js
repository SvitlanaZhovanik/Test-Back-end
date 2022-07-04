const { Shop } = require('../models');
const { NotFound } = require('http-errors');

const getAllShops = async (req, res) => {
  const shops = await Shop.find();
  if (shops.length === 0) {
    throw new NotFound('Shops are not found');
  }
  res.status(200).json({ data: shops });
};

exports.shopsController = {
  getAllShops,
};
