import e from "express";
import validateRequest from "../../middlewire/validateRequest";
import { userValidationSchema } from "./user.validation";
import { UserController } from "./user.controller";

const router = e.Router();

router.post(
  "/cteate-user",
  validateRequest(userValidationSchema.createUserZodValidationSchema),
  UserController.createUser,
);

export const UserRouter = router;
