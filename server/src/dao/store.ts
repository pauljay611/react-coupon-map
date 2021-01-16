import Store from "../models/store";
import { Op } from "sequelize";
interface Range {
  [Op.gte]: number;
  [Op.lt]: number;
}
interface Condition {
  lat: Range;
  lng: Range;
  category_id?: { [Op.eq]: string };
}
export interface FindStoresQuery {
  range?: number;
  lat?: number;
  lng?: number;
  category?: string;
}

export const findStores = async (params: FindStoresQuery) => {
  if (!params.range || !params.lat || !params.lng) {
    const stores = await Store.findAll();
    return stores;
  }
  const lat = +params.lat;
  const lng = +params.lng;
  const range = +params.range;

  const lowestLat = lat - range;
  const greatestLat = lat + range;
  const lowestLng = lng - range;
  const greatestLng = lng + range;

  let whereCondition: Condition = {
    lat: { [Op.gte]: lowestLat, [Op.lt]: greatestLat },
    lng: { [Op.gte]: lowestLng, [Op.lt]: greatestLng },
  };

  if (params.category) {
    whereCondition = {
      ...whereCondition,
      category_id: { [Op.eq]: params.category },
    };
  }
  const stores = await Store.findAll({
    where: {
      [Op.and]: whereCondition,
    },
  });
  return stores;
};

export const findStoreByID = async (id: number) => {
  const store = await Store.findByPk(id);
  return store;
};
