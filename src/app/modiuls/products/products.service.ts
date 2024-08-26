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

export const ProductsService = {
  getAllProductsFromDB,
  getSingleProductsFromDB,
  getProductsCatagoreFromDB,
};
