/* eslint-disable @typescript-eslint/no-explicit-any */
import Stripe from "stripe";
import config from "../../config";
import { Order } from "./order.model";

const createOrderDataFromDB = async (payload: any) => {
 if(payload.price){
  const amount=payload.price*100
  const strip=new Stripe(config.STRIPE_SECRET_KEY as string)
  const paymentIntent=await strip.paymentIntents.create({
    amount:amount,
    currency:'usd',
    automatic_payment_methods:{
      enabled:true
    }
  })
  return paymentIntent.client_secret
 }else if(payload){
   const resualt = await Order.create(payload);
   return resualt;
 }
};

export const OrderDataService = {
  createOrderDataFromDB,
};
