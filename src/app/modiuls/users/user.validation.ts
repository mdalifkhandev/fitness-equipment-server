import { z } from "zod";

export const createUserValidationSchema = z.object({
  firstName: z.string(),
  lestName: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["user", "seller"]).default("user"),
  isDeleted: z.boolean().default(false),
  phone: z.number(),
  division: z.string(),
  distric: z.string(),
  upzala: z.string(),
  detailsAddress: z.string(),
});

export const createUserInfoValidationschema = z.object({
  email: z.string().email(),
  phone: z.number(),
  division: z.string(),
  distric: z.string(),
  upzala: z.string(),
  detailsAddress: z.string(),
});
export const userValidationSchema = {
  createUserValidationSchema,
  createUserInfoValidationschema,
};
