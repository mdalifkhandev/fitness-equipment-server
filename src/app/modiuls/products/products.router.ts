import e from "express";
import { ProductsController } from "./products.controller";

const router = e.Router();

router.get("/", ProductsController.getAllProducts);

router.get("/:id", ProductsController.getSingleProducts);

export const ProductRouter = router;
