import { Products } from "./products.model";

const getAllProductsFromDB = async () => {
  const resualt = await Products.find();
  return resualt;
};

export const ProductsService = {
  getAllProductsFromDB,
};
