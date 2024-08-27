import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { AddToCard } from "./products.model";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Products } from "./products.model";

// const getAllProductsFromDB = async () => {
//   const resualt = await Products.find();
//   return resualt;
// };
const getAllProductsFromDB = async (query: any) => {
  if (query.catagory === "undefined" && query.name === "undefined") {
    const resualt = await Products.find();
    return resualt;
  }
  if (query.catagory && (query.name === "undefined" || query.name === "")) {
    const resualt = await Products.find({ catagory: query.catagory });
    return resualt;
  }
  if ((query.catagory === "undefined" || query.catagory === "") && query.name) {
    const resualt = await Products.find({ $text: { $search: query.name } });
    return resualt;
  }
  if (query.catagory && query.name) {
    const resualt = await Products.find({
      $text: { $search: query.name },
      catagory: query.catagory,
    });
    return resualt;
  }
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
  const id=body.productID
  
  const product=await AddToCard.findOne({productID:id})
if(product){
  throw new AppError(httpStatus.BAD_REQUEST,'This products is alrady exixit Your Card')
}
const resualt = await AddToCard.create(body);
return resualt;
};
const getAllAddToCardFromDB = async () => {
const resualt=await AddToCard.find()
  return resualt;
};
const removeAddToCardFromDB = async (id:any) => {
const resualt=await AddToCard.findOneAndDelete(id)
  return resualt;
};

export const ProductsService = {
  getAllProductsFromDB,
  getSingleProductsFromDB,
  getProductsCatagoreFromDB,
  createAddToCardFromDB,
  getAllAddToCardFromDB,
  removeAddToCardFromDB
};
