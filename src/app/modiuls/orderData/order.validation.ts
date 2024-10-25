import { z } from "zod";

const orderDataSchema = z.object({
  userName: z.string().min(1, "User name is required").optional(),
  userEmail: z.string().min(1, "User Email is required").optional(),
  userPhone: z.string().min(1, "Phone number must be valid").optional(),
  userDivision: z.string().min(1, "Division is required").optional(),
  userDistric: z.string().min(1, "District is required").optional(),
  userUpzala: z.string().min(1, "Upazila is required").optional(),
  userAddress: z.string().min(1, "Address is required").optional(),
  paymentID: z.string().min(5).optional(),
  isDeleted: z.boolean().default(false),
  productsID: z.array(z.string()),
  quentity: z.object({}),
  totalPrice: z.number().nonnegative(),
});

export const OrderValidation = {
  orderDataSchema,
};
