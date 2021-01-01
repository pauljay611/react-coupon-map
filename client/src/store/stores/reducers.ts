import { createReducer } from "typesafe-actions";
import { StoreState, ActionsType } from "./types";
import actions from "./actions";

const initialState: StoreState = {
  stores: [],
};

const reducer = createReducer<StoreState, ActionsType>(initialState)
  .handleAction(actions.setAllStores, (_, actions) => ({
    stores: actions.payload,
  }))
  .handleAction(actions.getAllStores, (state) => {
    return { stores: state.stores };
  });

export default reducer;
