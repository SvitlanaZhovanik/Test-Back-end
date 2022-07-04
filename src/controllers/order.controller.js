const { Order } = require('../models');
const { NotFound } = require('http-errors');

const addOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.status(201).json({ data: { order } });
};

const getOrdersByValue = async (req, res) => {
  const email = req.query?.email;
  const phone = req.query?.phone;
  const id = req.query?.id;
  const orders = await Order.find({
    $or: [{ email }, { phone }, { _id: id }],
  });
  if (orders.length === 0) {
    throw new NotFound('Orders are not found');
  }
  res.status(200).json({ data: orders });
};

exports.ordersController = { addOrder, getOrdersByValue };
