import e from "express";
import validateRequest from "../../middlewire/validateRequest";
import { userValidationSchema } from "./user.validation";
import { UserController } from "./user.controller";

const router = e.Router();

router.post(
  "/cteate-user",
  validateRequest(userValidationSchema.createUserValidationSchema),
  UserController.createUser,
);
router.post(
  "/cteate-user-info",
  validateRequest(userValidationSchema.createUserInfoValidationschema),
  UserController.createUserInfo,
);
router.get("/user-info", UserController.getUserInfo);
router.get("/user", UserController.getUser);

export const UserRouter = router;
