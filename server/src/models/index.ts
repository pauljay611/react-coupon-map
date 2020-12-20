import { Sequelize } from "sequelize";
import config from "../configs/mysql";
import Store, { storeModelName, storeModelAttributes } from "./store";
import Coupon, { couponModelName, couponModelAttributes } from "./coupon";
import Category, {
  categoryModelName,
  categoryModelAttributes,
} from "./category";

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  port: config.port,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 30000,
  },
});

export async function authenticateDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

Store.init(storeModelAttributes, {
  sequelize,
  modelName: storeModelName,
  timestamps: true,
});

Coupon.init(couponModelAttributes, {
  sequelize,
  modelName: couponModelName,
  timestamps: true,
});

Category.init(categoryModelAttributes, {
  sequelize,
  modelName: categoryModelName,
  timestamps: true,
});

export default sequelize;
