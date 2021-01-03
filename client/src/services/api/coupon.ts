import { api } from "./config";
import { ICoupon } from "../../types";

export const getCouponsAPI = () =>
  api.get<ICoupon[]>("/coupons").then((res) => {
    return res.data;
  });
