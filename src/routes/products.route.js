const { Router } = require('express');
const { commonMiddlewares } = require('../middlewares');
const { productsController: controller } = require('../controllers');

const { ctrlWrapper } = commonMiddlewares;

const router = Router();

router.get('/:shopId', ctrlWrapper(controller.getProducts));

module.exports = router;
