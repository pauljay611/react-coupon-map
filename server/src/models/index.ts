import { Sequelize } from "sequelize";
import mysqlConfig from "../../sequelize/config/config.js";
import Store, { storeModelName, storeModelAttributes } from "./store";
import Coupon, { couponModelName, couponModelAttributes } from "./coupon";
import Category, {
  categoryModelName,
  categoryModelAttributes,
} from "./category";

const env = process.env.NODE_ENV || "development";

const config = mysqlConfig[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 30000,
    },
  }
);

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

Store.belongsToMany(Coupon, { through: "StoreCoupon", foreignKey: "store_id" });
Coupon.belongsToMany(Store, {
  through: "StoreCoupon",
  foreignKey: "coupon_id",
});

export default sequelize;
