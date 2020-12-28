import { findAllStores, findStoreByID } from "../dao/store";

class Store {
  static async getAllData() {
    const stores = await findAllStores();
    return stores;
  }
  static async getDataByID(id: number) {
    const stores = await findStoreByID(id);
    return stores;
  }
}

export default Store;
