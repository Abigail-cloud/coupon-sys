const {Carts} = require('../models');
const { ListItems } = require('../models');
const {Coupons} = require('../models')

const purchaseItem = async (req, res) => {
  try {
    const {name, price } = req.body;
    const item = await ListItems.findOne({ where: { name: name } });
    if (!item){
      return res.status(404).json({error : 'Item not available'})
    }
    const itemCart = await Carts.create({
      name,
      price
    })
    res.status(200).json(itemCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal server error'})
  }
};

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
//Define the Constant values
const coupons = {
  FIXED10: {
    minimumItemPrice: 50,
    minimumItemCount: 1,
    type: 'fixed',
    value: 10,
  },
  PERCENT10: {
    minimumItemPrice: 100,
    minimumItemCount: 2,
    type: 'percent',
    value: 10,
  },
  MIXED10: {
    minimumItemPrice: 200,
    minimumItemCount: 3,
    type: 'mixed',
    value: 10,
  },
  REJECTED10: {
    minimumItemPrice: 1000,
    type: 'rejected',
    value: 10,
  },
};
const applyCoupon = async (req, res) => {
  const {couponCode} = req.body
  const coupon = coupons[couponCode];
  if (!coupon) {
    return res.status(404).json({ error: 'Coupon not found' });
  }
  try {
    const cartItems = await Carts.findAll();
    let totalPrice = 0;
    for (let i= 0; i < cartItems.length; i++) {
      totalPrice += cartItems[i].price;
    }
    if(totalPrice < coupon.minimumItemPrice){
      return res
        .status(400)
        .json({ error: 'Cart total price is too low for this coupon!!' });
    }

      if (coupon.type === 'fixed') {
        discountAmount = coupon.value;
      } else if (coupon.type === 'percent' ) {
        discountAmount = (coupon.value / 100) * totalPrice;
      } else if (coupon.type === 'mixed') {
        discountAmount = Math.max(
          coupon.value,
          (coupon.value / 100) * totalPrice
        );
      } else if (coupon.type === 'rejected' ) {
        discountAmount =  (minimumItemPrice - coupon.value) +
          (coupon.value / 100) * totalPrice
      }
      const discountedTotalPrice = totalPrice - discountAmount;
      const userCart = await Coupons.create({
        couponCode,
        cartItems,
        totalPrice,
        discountedTotalPrice,
      });
      res.json(userCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal server error'})
  }
  
};

module.exports ={
purchaseItem,
getCart,
applyCoupon
 } ;
