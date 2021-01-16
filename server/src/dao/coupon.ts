import Coupon from "../models/coupon";
import Store from "../models/store";
import { Op } from "sequelize";
export interface FindCouponsQuery {
  id?: number;
}

export const findCoupons = async (query: FindCouponsQuery) => {
  if (query.id) {
    const conpons = await Coupon.findAll({
      include: [
        {
          model: Store as any,
          where: { id: query.id },
          attributes: [],
        },
      ],
    });
    return conpons;
  }
  const conpons = await Coupon.findAll();
  return conpons;
};

export const findCouponByID = async (id: number) => {
  const conpon = await Coupon.findByPk(id);
  return conpon;
};
