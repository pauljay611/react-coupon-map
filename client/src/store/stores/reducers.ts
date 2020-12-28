import {} from "./actions";
import {
  StoreActionTypes,
  StoreState,
  GET_STORE,
  GET_STORES,
} from "./constants";

const initialState: StoreState = {
  stores: [],
};

const reducer = (
  state: StoreState = initialState,
  action: StoreActionTypes
) => {
  switch (action.type) {
    case GET_STORES:
      return state.stores;
    case GET_STORE:
      return state.stores[action.payload.id];
    default:
      return state;
  }
};

export default reducer;
