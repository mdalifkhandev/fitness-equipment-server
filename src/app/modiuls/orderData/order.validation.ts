import { z } from "zod";

const orderDataSchema = z.object({
  userName: z.string().min(1, "User name is required"),
  userEmail: z.string().min(1, "User Email is required").email(),
  userPhone: z.string().min(6, "Phone number must be valid"),
  userDivision: z.string().min(1, "Division is required"),
  userDistric: z.string().min(1, "District is required"),
  userUpzala: z.string().min(1, "Upazila is required"),
  userAddress: z.string().min(1, "Address is required"),
  paymentID: z.string().min(5).optional(),
  isDeleted: z.boolean().default(false),
  productsID: z.array(z.string()),
  quentity: z.object({}),
  totalPrice: z.number().nonnegative(),
});

export const OrderValidation = {
  orderDataSchema,
};
