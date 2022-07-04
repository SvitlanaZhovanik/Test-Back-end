const { Router } = require('express');
const { commonMiddlewares } = require('../middlewares');
const { ordersSchema: schema } = require('../schemas');
const { ordersController: controller } = require('../controllers');

const { ctrlWrapper, validateRequest } = commonMiddlewares;

const router = Router();

router.post(
  '/',
  validateRequest(schema.order),
  ctrlWrapper(controller.addOrder),
);
router.get('/', ctrlWrapper(controller.getOrdersByValue));

module.exports = router;
