const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController.js');
const listController = require('../controllers/listController.js');

router.get('/menu', menuController.getMenu);
router.get('/order', listController.getAllOrders);
router.post('/order', listController.addOrder);
router.delete('/order/:id', listController.deleteOrder);
router.get('/order/:id', listController.getOrderById);

module.exports = router;