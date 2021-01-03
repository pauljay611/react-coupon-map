import { Epic } from "redux-observable";
import { isOfType } from "typesafe-actions";
import { from, of } from "rxjs";
import { catchError, filter, map, mergeMap, tap } from "rxjs/operators";

import * as API from "../../services/api/coupon";

import constants from "./constants";
import { ActionsType } from "./types";
import actions from "./actions";

import { RootState } from "../index";

export const getAllStoresEpic: Epic<
  ActionsType,
  ActionsType,
  RootState,
  typeof API
> = (action$, _, { getCouponsAPI }) => {
  return action$.pipe(
    filter(isOfType(constants.FETCH_ALL_COUPONS)),
    mergeMap(() =>
      from(getCouponsAPI()).pipe(
        map(actions.fetchAllCouponsSuccess),
        catchError((err) => of(actions.fetchAllCouponsError(err)))
      )
    )
  );
};
