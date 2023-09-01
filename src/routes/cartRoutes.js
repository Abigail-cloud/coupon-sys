const express = require('express');
const route = express.Router();
const {getCart }= require('../controllers/cart_module')

route.get('/cart', getCart)



module.exports = route;