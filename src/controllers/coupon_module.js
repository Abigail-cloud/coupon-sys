const { Coupons} = require('../models');
const getCouponCode = require('../services/utils')

const verifyCoupon = async (req, res) => {
 const code = req.body.couponCode || getCouponCode() ;
 try {
  const coupon = await Coupons.findOne({where: {couponCode : code}});
  if(!coupon){
    res.status(400).json({ message: 'Invalid coupon code.' });
    return;
  }
 } catch (error) {
  
 }
};

module.exports = {
  verifyCoupon,
};
