import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchAllCoupons } from "../store/coupons/actions";

export const useCoupons = () => {
  const { coupons, loading } = useSelector((state: RootState) => state.coupon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCoupons());
  }, []);

  return { coupons, loading } as const;
};
