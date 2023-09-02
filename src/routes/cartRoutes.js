const express = require('express');
const route = express.Router();
const {purchaseItem} = require('../controllers/cartCoupon_module');
const {getCart }= require('../controllers/cartCoupon_module');
const {applyCoupon} = require('../controllers/cartCoupon_module')



route.post('/cart/purchase', purchaseItem);
route.get('/cart', getCart);
route.post('/coupon/apply/:couponCode', applyCoupon);




module.exports = route;