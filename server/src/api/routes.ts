import express from "express";
import Store from "../models/store";
import Coupon from "../models/coupon";
import Category from "../models/category";

const router = express.Router();

router.get("/stores", async (req, res) => {
  const stores = await Store.findAll();
  res.status(200).json(stores);
});

router.get("/coupons", async (req, res) => {
  const coupons = await Coupon.findAll();
  res.status(200).json(coupons);
});

router.get("/categories", async (req, res) => {
  const categories = await Category.findAll();
  res.status(200).json(categories);
});

export default router;
