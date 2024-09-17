/* eslint-disable @typescript-eslint/no-explicit-any */
import Stripe from "stripe";
import config from "../../config";
import { Order } from "./order.model";
import AppError from "../../error/AppError";
import httpStatus from "http-status";

const createOrderDataFromDB = async (payload: any) => {
  if (payload.price) {
    const amount = payload.price * 100;
    const strip = new Stripe(config.STRIPE_SECRET_KEY as string);
    const paymentIntent = await strip.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    return paymentIntent.client_secret;
  } else if (payload) {
    const resualt = await Order.create(payload);
    return resualt;
  }
};

const getMyOrderFrolDB = async (email: string) => {
  const orderfilter = {
    isDeleted: false,
    userEmail: email,
  };
  const resualt = await Order.find(orderfilter);
  return resualt;
};
const getMyCancelOrderFrolDB = async (email: string) => {
  const orderfilter = {
    isDeleted: true,
    userEmail: email,
  };
  const resualt = await Order.find(orderfilter);
  return resualt;
};

const cancelOrderFromDB = async (id: string) => {
  const orderData = await Order.findById(id);
  if (!orderData) {
    throw new AppError(httpStatus.BAD_REQUEST, "This Products is not Exixit");
  }
  if (orderData.isDeleted) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "This Products is alrady Deleted",
    );
  }

  const resualt = await Order.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return resualt;
};

export const OrderDataService = {
  createOrderDataFromDB,
  getMyOrderFrolDB,
  cancelOrderFromDB,
  getMyCancelOrderFrolDB,
};
