import { IStore } from "../../types";

export const GET_STORES = "get-stores";

export const GET_STORE = "get-store";

interface GetStores {
  type: typeof GET_STORES;
}

interface GetStore {
  type: typeof GET_STORE;
  payload: {
    id: number;
  };
}

export type StoreActionTypes = GetStores | GetStore;

export interface StoreState {
  stores: IStore[];
}
