import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchAllCoupons } from "../store/coupons/actions";

export const useCoupons = (storeID?: string) => {
  const { coupons, loading } = useSelector((state: RootState) => state.coupon);
  const dispatch = useDispatch();

  const getCoupons = useCallback((storeID: string) => {
    dispatch(fetchAllCoupons({ storeID: +storeID }));
  }, []);

  useEffect(() => {
    if (!storeID) return;
    getCoupons(storeID);
  }, [storeID]);

  return { coupons, getCoupons, loading } as const;
};
