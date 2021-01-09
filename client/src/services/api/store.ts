import { api } from "./config";
import { IStore, IStoresPayload } from "../../types";

export const getStoresAPI = (payload: IStoresPayload) =>
  api
    .get<IStore[]>("/stores", {
      params: {
        range: payload.range,
        ...payload.location,
      },
    })
    .then((res) => {
      return res.data;
    });
