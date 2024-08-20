import e from "express";
import { ProductsController } from "./products.controller";

const router = e.Router();

router.get("/", ProductsController.getAllProducts);

export const ProductRouter = router;
