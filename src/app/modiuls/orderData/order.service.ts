/* eslint-disable @typescript-eslint/no-explicit-any */
import { Order } from "./order.model";

const createOrderDataFromDB = async (payload: any) => {
  const resualt = await Order.create(payload);
  return resualt;
};

export const OrderDataService = {
  createOrderDataFromDB,
};
