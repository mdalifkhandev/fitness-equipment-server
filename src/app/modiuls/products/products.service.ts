import { Products } from "./products.model";

const getAllProductsFromDB = async () => {
  const resualt = await Products.find();
  return resualt;
};
const getSingleProductsFromDB = async (id:string) => {
  const resualt = await Products.findById(id);
  return resualt;
};

export const ProductsService = {
  getAllProductsFromDB,
  getSingleProductsFromDB
};
