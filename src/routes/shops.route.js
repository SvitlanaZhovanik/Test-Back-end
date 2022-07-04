const { Router } = require('express');
const { commonMiddlewares } = require('../middlewares');
const { shopsController: controller } = require('../controllers');

const { ctrlWrapper } = commonMiddlewares;

const router = Router();

router.get('/', ctrlWrapper(controller.getAllShops));

module.exports = router;
