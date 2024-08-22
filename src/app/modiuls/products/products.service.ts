/* eslint-disable @typescript-eslint/no-explicit-any */
import { Products } from "./products.model";

// const getAllProductsFromDB = async () => {
//   const resualt = await Products.find();
//   return resualt;
// };
const getAllProductsFromDB = async (query: any) => {
  console.log(query);

  const resualt = await Products.find();
  return resualt;
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
