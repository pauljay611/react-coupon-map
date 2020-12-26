import express from "express";
import {
  getAllCategories,
  getAllCoupons,
  getAllStores,
  getStoreByID,
} from "../api/controllers";

const router = express.Router();

router.get("/stores", getAllStores);
router.get("/store/:id", getStoreByID);

router.get("/coupons", getAllCoupons);
router.get("/coupons", getAllCoupons);

router.get("/categories", getAllCategories);
router.get("/categories", getAllCategories);

export default router;
