/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { AddToCard } from "./products.model";
import { Products } from "./products.model";

const getAllProductsFromDB = async (query: any) => {
  const { catagory, name, minPrice, maxPrice } = query;
  const queryObj = {
    isDeleted: false,
  } as any;

  const hasMinPrice = minPrice && minPrice !== "undefined";
  const hasMaxPrice = maxPrice && maxPrice !== "undefined";

  if (hasMinPrice || hasMaxPrice) {
    queryObj.price = {};
    if (hasMinPrice) {
      queryObj.price.$gte = parseFloat(minPrice);
    }
    if (hasMaxPrice) {
      queryObj.price.$lte = parseFloat(maxPrice);
    }
  }

  if (catagory && catagory !== "undefined" && catagory !== "") {
    const categoryArray = catagory.split(",");
    queryObj.catagory = { $in: categoryArray };
  }

  if (name && name !== "undefined" && name !== "") {
    queryObj.name = { $regex: name, $options: "i" };
  }

  const result = await Products.find(queryObj);
  return result;
};

const getSingleProductsFromDB = async (id: string) => {
  const resualt = await Products.findById(id);
  return resualt;
};

const getProductsWitchCheakoutFromDB = async (ids: string[]) => {
  const resualt = await AddToCard.find({ _id: { $in: ids } });
  return resualt;
};

const getProductsCatagoreFromDB = async () => {
  const resualt = await Products.find();
  const rrss = resualt.map((catagori) => catagori.catagory);
  const catagore: string[] = [...new Set(rrss)];
  return catagore;
};

const deleteProductsFromDB = async (id: string) => {
  const resualt = await Products.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return resualt;
};

const updathProductsFromDB = async (id: string, payloas: any) => {
  const resualt = await Products.findByIdAndUpdate(id, payloas, { new: true });
  return resualt;
};

const createProductsFromDB = async (payload: any) => {
  const resuslt = await Products.create(payload);
  return resuslt;
};

///card
const createAddToCardFromDB = async (body: any) => {
  const id = body.productID;

  const product = await AddToCard.findOne({ productID: id });
  if (product) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "This products is alrady exisit Your Card",
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
  deleteProductsFromDB,
  updathProductsFromDB,
  createProductsFromDB,
  getProductsWitchCheakoutFromDB,
  //card
  createAddToCardFromDB,
  getAllAddToCardFromDB,
  removeAddToCardFromDB,
};
