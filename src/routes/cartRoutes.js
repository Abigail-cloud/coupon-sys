const express = require('express');
const route = express.Router();
const {getCart }= require('../controllers/cart_module')
const {verifyCoupon}= require('../controllers/coupon_module')


route.get('/cart', getCart);
route.post('/coupon', verifyCoupon);



module.exports = route;