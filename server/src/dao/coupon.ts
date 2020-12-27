import Coupon from "../models/coupon";

export const findAllCoupons = async () => {
  const conpons = await Coupon.findAll();
  return conpons;
};

export const findCouponByID = async (id: number) => {
  const conpon = await Coupon.findByPk(id);
  return conpon;
};
