import { findAllCoupons, findCouponByID } from "../dao/coupon";

class Coupon {
  static async getAllData() {
    const coupons = await findAllCoupons();
    return coupons;
  }
  static async getDataByID(id: number) {
    const coupons = await findCouponByID(id);
    return coupons;
  }
}

export default Coupon;
