import { z } from "zod";

const productsCreateValidationSchema = z.object({
  name: z.string(),
  image: z.string(),
  rating: z.number(),
  price: z.number(),
  discreption: z.string(),
  extarDiscreption: z.object({
    header: z.string(),
    details: z.string(),
  }),
  catagory: z.string(),
  review: z.number(),
  instock: z.number(),
  discount: z.number(),
  isDeleted:z.boolean().default(false)
});
const adddToCardCreateValidationSchema = z.object({
  name: z.string(),
  image: z.string(),
  rating: z.number(),
  price: z.number(),
  discreption: z.string(),
  extarDiscreption: z.object({
    header: z.string(),
    details: z.string(),
  }),
  catagory: z.string(),
  review: z.number(),
  instock: z.number(),
  discount: z.number(),
  productID: z.string(),
});

export const ProductsValidation = {
  productsCreateValidationSchema,
  adddToCardCreateValidationSchema,
};
