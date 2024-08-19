import { z } from "zod";

export const createUserZodValidationSchema = z.object({
  firstName: z.string(),
  lestName: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["user", "seller"]).default("user"),
  isDeleted: z.boolean().default(false),
});

export const userValidationSchema = {
  createUserZodValidationSchema,
};
