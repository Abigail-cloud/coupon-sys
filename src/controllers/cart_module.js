const {Carts} = require('../models');

const getCart = async (req, res) => {
  try {
    const cartItems = await Carts.findAll();
    let totalPrice = 0;
    for (let i= 0; i < cartItems.length; i++) {
      totalPrice += cartItems[i].price;
    }
    res.json({ userCart: cartItems, totalPrice });
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal server error'})
  }
  
};

module.exports ={
getCart
 } ;
