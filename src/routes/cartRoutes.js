const express = require('express')
const route = express.Router();
const {getSingleCart} = require('../controllers/cart.controller')

route.get('/cart', getSingleCart)


module.exports = route;