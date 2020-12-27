import { findAllCoupons, findCouponByID } from "../dao/coupon";

class Coupon {
  static async getAllData() {
    const stores = await findAllCoupons();
  }
  static async getDataByID(id: number) {
    const stores = await findCouponByID(id);
  }
}

export default Coupon;
