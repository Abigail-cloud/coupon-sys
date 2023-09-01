const { Coupons } = require('../models');
const { Carts } = require('../models');


const verifyCoupon = async (req, res) => {
  const code = req.body.couponCode ;
  try {
    const coupon = await Coupons.findOne({ where: { couponCode: code } });
    if (!coupon) {
      res.status(400).json({ message: 'Invalid coupon code.' });
    } else if (coupon.isUsed) {
      res.status(400).json({ message: 'Coupon has already been used.' });
    } else {
      // Fetch cart items
      const cartItems = await Carts.findAll();
      const totalPrice = cartItems.reduce(
        (total, item) => total + item.price,
        0
      );

      if (totalPrice < coupon.minTotal || cartItems.length < coupon.minItems) {
        res.status(400).json({ message: 'Coupon rules not satisfied.' });
      } else {
        let discount = 0;
        if (coupon.discountType === 'fixed') {
          discount = Math.min(coupon.discountValue, totalPrice);
        } else if (coupon.discountType === 'percent') {
          discount = (coupon.discountValue / 100) * totalPrice;
        } else if (coupon.discountType === 'mixed') {
          const percentDiscount = (coupon.discountValue / 100) * totalPrice;
          discount = Math.max(percentDiscount, coupon.discountValue);
        }

        const adjusted_price = totalPrice - discount;

        // Mark the coupon as used
        coupon.isUsed = true;
        await coupon.save();

        res.json({ adjusted_price, discount_amount: discount });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  verifyCoupon,
};
