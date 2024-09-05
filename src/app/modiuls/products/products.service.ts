/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { AddToCard } from "./products.model";
import { Products } from "./products.model";

// const getAllProductsFromDB = async () => {
//   const resualt = await Products.find();
//   return resualt;
// };
const getAllProductsFromDB = async (query: any) => {
  const { catagory, name, minPrice, maxPrice } = query;
  const categoryArray = catagory ? catagory.split(",") : [];
  const queryObj = {} as any;

  if (minPrice && maxPrice) {
    queryObj.price = {};
    if (minPrice) {
      queryObj.price.$gte = parseFloat(minPrice);
    }
    if (maxPrice) {
      queryObj.price.$lte = parseFloat(maxPrice);
    }
  }
  if (catagory && catagory !== "undefined") {
    queryObj.catagory = { $in: categoryArray };
  }
  if (name && name !== "undefined") {
    queryObj.$text = { $search: name };
  }
  if (
    (!catagory || catagory === "undefined") &&
    (!name || name === "undefined") &&
    (!minPrice || minPrice === "undefined") &&
    (!maxPrice || maxPrice === "undefined")
  ) {
    return await Products.find();
  }
  const result = await Products.find(queryObj);
  return result;
};
const getSingleProductsFromDB = async (id: string) => {
  const resualt = await Products.findById(id);
  return resualt;
};
const getProductsCatagoreFromDB = async () => {
  const resualt = await Products.find();
  const rrss = resualt.map((catagori) => catagori.catagory);
  const catagore: string[] = [...new Set(rrss)];
  return catagore;
};

const createAddToCardFromDB = async (body: any) => {
  const id = body.productID;

  const product = await AddToCard.findOne({ productID: id });
  if (product) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "This products is alrady exixit Your Card",
    );
  }
  const resualt = await AddToCard.create(body);
  return resualt;
};
const getAllAddToCardFromDB = async () => {
  const resualt = await AddToCard.find();
  return resualt;
};
const removeAddToCardFromDB = async (id: any) => {
  const resualt = await AddToCard.findOneAndDelete(id);
  return resualt;
};

export const ProductsService = {
  getAllProductsFromDB,
  getSingleProductsFromDB,
  getProductsCatagoreFromDB,
  createAddToCardFromDB,
  getAllAddToCardFromDB,
  removeAddToCardFromDB,
};
