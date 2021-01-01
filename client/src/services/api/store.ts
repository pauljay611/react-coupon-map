import { api } from "./config";
import { IStore } from "../../types";

export const getStoresAPI = () =>
  api.get<IStore[]>("/stores").then((res) => {
    return res.data;
  });
