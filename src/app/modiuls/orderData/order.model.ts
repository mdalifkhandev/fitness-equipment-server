import { model, Schema } from "mongoose";
import { TOrderData } from "./order.interfach";

const orderDataSchema = new Schema<TOrderData>({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userPhone: {
    type: String,
    required: true,
  },
  userDivision: {
    type: String,
    required: true,
  },
  userDistric: {
    type: String,
    required: true,
  },
  userUpzala: {
    type: String,
    required: true,
  },
  userAddress: {
    type: String,
    required: true,
  },
  productsImage: {
    type: String,
    required: true,
  },
  productsName: {
    type: String,
    required: true,
  },
  paymentID: {
    type: String,
  },
  productsPrice: {
    type: Number,
    required: true,
  },
  productsQuentity: {
    type: Number,
    required: true,
  },
  productsShipping: {
    type: Number,
    required: true,
  },
  productsTotalPrice: {
    type: Number,
    required: true,
  },
  productsID: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  isDeleted:{
    type:Boolean,
    default:false
  }
});

export const Order = model<TOrderData>("OrderData", orderDataSchema);
