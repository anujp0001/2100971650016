const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const productController = require('../controllers/productController');

router.post('/register', authController.register);
router.post('/auth', authController.authenticate);

router.get('/categories/:categoryname/products', productController.getProducts);
router.get('/categories/:categoryname/products/:productid', productController.getProductById);

module.exports = router;

