import { Router } from "express";
import { UserRouter } from "../modiuls/users/user.router";
import { AuthRouter } from "../modiuls/auth/auth.router";

const router = Router();

const mosuleRouter = [
  {
    path: "/users",
    router: UserRouter,
  },
  {
    path: "/auth",
    router: AuthRouter,
  },
];

mosuleRouter.forEach((route) => router.use(route.path, route.router));

export default router;
