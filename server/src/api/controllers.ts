import { Request, Response } from "express";
import Store from "../services/store";
import Coupon from "../services/coupon";
import Category from "../services/category";

export const getStores = async (req: Request, res: Response) => {
  const stores = await Store.getAllData(req.query);
  res.status(200).json(stores);
};

export const getStoreByID = async (
  req: Request<{ id: number }>,
  res: Response
) => {
  const stores = await Store.getDataByID(+req.params.id);
  res.status(200).json(stores);
};

export const getCoupons = async (req: Request, res: Response) => {
  const coupons = await Coupon.getAllData(req.query);
  res.status(200).json(coupons);
};

export const getCouponByID = async (req: Request, res: Response) => {
  const coupons = await Coupon.getDataByID(+req.params.id);
  res.status(200).json(coupons);
};

export const getCategories = async (req: Request, res: Response) => {
  const categories = await Category.getAllData();
  res.status(200).json(categories);
};

export const getCategoryByID = async (req: Request, res: Response) => {
  const categories = await Category.getDataByID(+req.params.id);
  res.status(200).json(categories);
};
