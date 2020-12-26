import { Request, Response } from "express";
import Store from "../models/store";
import Coupon from "../models/coupon";
import Category from "../models/category";

export const getAllStores = async (req: Request, res: Response) => {
  const stores = await Store.findAll();
  res.status(200).json(stores);
};

export const getStoreByID = async (req: Request, res: Response) => {
  const stores = await Store.findByPk(req.params.id);
  res.status(200).json(stores);
};

export const getAllCoupons = async (req: Request, res: Response) => {
  const coupons = await Coupon.findAll();
  res.status(200).json(coupons);
};

export const getCouponByID = async (req: Request, res: Response) => {
  const coupons = await Coupon.findByPk(req.params.id);
  res.status(200).json(coupons);
};

export const getAllCategories = async (req: Request, res: Response) => {
  const categories = await Category.findAll();
  res.status(200).json(categories);
};

export const getCategoryByID = async (req: Request, res: Response) => {
  const categories = await Category.findByPk(req.params.id);
  res.status(200).json(categories);
};
