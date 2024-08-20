import { model, Schema } from "mongoose";
import { TProducts } from "./products.interfach";

const productsSchema = new Schema<TProducts>({
  name: {
    type: String,
    required: true,
  },
  image: {
    img1:{
        type: String,
        required: true,
    }
    
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discreption: {
    type: String,
    required: true,
  },
  extarDiscreption: {
    header: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
  },
  catagory: {
    type: String,
    required: true,
  },
  review: {
    type: Number,
    required: true,
  },
  instock: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
});

export const Products = model<TProducts>("products", productsSchema);
