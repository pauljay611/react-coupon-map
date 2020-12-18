import { DataTypes, Sequelize, Model } from "sequelize";
import { IStore } from "../types";

export const storeModelName = "store";

export const storeModelAttributes = {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  lat: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  lng: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
};

class Store extends Model<IStore> {}

export default Store;
