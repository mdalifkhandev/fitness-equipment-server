import { Types } from "mongoose";

export type TOrderData = {
  userName: string;
  userEmail: string;
  userPhone: string;
  userDivision: string;
  userDistric: string;
  userUpzala: string;
  userAddress: string;
  productsImage: string;
  productsName: string;
  productsPrice: number;
  productsQuentity: number;
  productsShipping: number;
  productsTotalPrice: number;
  paymentID?: string;
  productsID: Types.ObjectId;
  isDeleted: boolean;
};
