import { createReducer } from "typesafe-actions";
import { CouponState, ActionsType } from "./types";
import actions from "./actions";

const initialState: CouponState = {
  coupons: [],
  loading: false,
};

const reducer = createReducer<CouponState, ActionsType>(initialState)
  .handleAction(actions.fetchAllCouponsSuccess, (_, actions) => ({
    coupons: actions.payload,
    loading: false,
  }))
  .handleAction(actions.fetchAllCoupons, (state) => {
    return { coupons: state.coupons, loading: true };
  })
  .handleAction(actions.fetchAllCouponsError, (_, actions) => {
    return { coupons: [], loading: false, error: actions.payload };
  });

export default reducer;
