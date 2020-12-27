import Store from "../models/store";

export const findAllStores = async () => {
  const stores = await Store.findAll();
  return stores;
};

export const findStoreByID = async (id: number) => {
  const store = await Store.findByPk(id);
  return store;
};
