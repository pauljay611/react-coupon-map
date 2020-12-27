import { findAllCategories, findCategoryByID } from "../dao/category";

class Category {
  static async getAllData() {
    const stores = await findAllCategories();
  }
  static async getDataByID(id: number) {
    const stores = await findCategoryByID(id);
  }
}

export default Category;
