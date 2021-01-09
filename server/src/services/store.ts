import { FindStoresQuery, findStores, findStoreByID } from "../dao/store";

class Store {
  static async getAllData(params: FindStoresQuery) {
    const stores = await findStores(params);
    return stores;
  }
  static async getDataByID(id: number) {
    const stores = await findStoreByID(id);
    return stores;
  }
}

export default Store;
