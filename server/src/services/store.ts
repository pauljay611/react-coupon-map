import { findAllStores, findStoreByID } from "../dao/store";

class Store {
  static async getAllData() {
    const stores = await findAllStores();
  }
  static async getDataByID(id: number) {
    const stores = await findStoreByID(id);
  }
}

export default Store;
