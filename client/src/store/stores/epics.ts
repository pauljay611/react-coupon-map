import { Epic } from "redux-observable";
import { isOfType } from "typesafe-actions";
import { from } from "rxjs";
import { catchError, filter, map, mergeMap, tap } from "rxjs/operators";

import * as API from "../../services/api/store";

import constants from "./constants";
import { ActionsType, StoreState } from "./types";
import actions from "./actions";

import { RootState } from "../index";

export const getAllStoresEpic: Epic<
  ActionsType,
  ActionsType,
  RootState,
  typeof API
> = (action$, store, { getStoresAPI }) => {
  return action$.pipe(
    filter(isOfType(constants.GET_ALL_STORES)),
    mergeMap(() => from(getStoresAPI()).pipe(map(actions.setAllStores)))
  );
};
