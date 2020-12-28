import { GET_STORES, GET_STORE, StoreActionTypes } from "./constants";

export function getAllStores(): StoreActionTypes {
  return {
    type: GET_STORES,
  };
}

export function getStore(id: number): StoreActionTypes {
  return {
    type: GET_STORE,
    payload: { id },
  };
}
