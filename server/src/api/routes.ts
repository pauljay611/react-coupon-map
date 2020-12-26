import express from "express";
import {
  getAllCategories,
  getAllCoupons,
  getAllStores,
} from "../api/controllers";

const router = express.Router();

router.get("/stores", getAllStores);

router.get("/coupons", getAllCoupons);

router.get("/categories", getAllCategories);

export default router;
