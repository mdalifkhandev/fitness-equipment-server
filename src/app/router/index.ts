import { Router } from "express";
import { UserRouter } from "../modiuls/users/user.router";
import { AuthRouter } from "../modiuls/auth/auth.router";
import { ProductRouter } from "../modiuls/products/products.router";
import { OrderDataRouter } from "../modiuls/orderData/order.router";

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
  {
    path: "/products",
    router: ProductRouter,
  },
  {
    path: "/order",
    router: OrderDataRouter,
  },
];

mosuleRouter.forEach((route) => router.use(route.path, route.router));

export default router;
