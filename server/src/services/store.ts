import { FindStoresQuery, findStores, findStoreByID } from "../dao/store";

class Store {
  static async getAllData(query: FindStoresQuery) {
    const stores = await findStores(query);
    return stores;
  }
  static async getDataByID(id: number) {
    const stores = await findStoreByID(id);
    return stores;
  }
}

export default Store;
