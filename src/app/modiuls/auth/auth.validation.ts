import { z } from "zod";

const loginValidationSchema = z.object({
  // body:z.object({
  email: z
    .string({
      required_error: "Valid Email is must be Provided",
      message: "Valid Email is must be Provided",
    })
    .email({
      message: "Valid Email is must be Provided",
    }),
  password: z.string({
    required_error: "Password is Required",
  }),
  // })
});

export const AuthValidation = {
  loginValidationSchema,
};
