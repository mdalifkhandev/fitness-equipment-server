import e from "express";
import { ProductsController } from "./products.controller";

const router = e.Router();

router.get("/", ProductsController.getAllProducts);

router.get("/catagore", ProductsController.getProductsCatagore);

// router.get("/catagore/:natagoryname", ProductsController.getProductsCatagore);

router.get("/:id", ProductsController.getSingleProducts);

export const ProductRouter = router;
