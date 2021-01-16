import { findCoupons, findCouponByID, FindCouponsQuery } from "../dao/coupon";

class Coupon {
  static async getAllData(query: FindCouponsQuery) {
    const coupons = await findCoupons(query);
    return coupons;
  }
  static async getDataByID(id: number) {
    const coupons = await findCouponByID(id);
    return coupons;
  }
}

export default Coupon;
