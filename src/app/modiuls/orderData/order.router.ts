import e from "express";
import validateRequest from "../../middlewire/validateRequest";
import { OrderValidation } from "./order.validation";
import { OrderDataController } from "./order.controller";

const router = e.Router();

router.post(
  "/create-data",
  validateRequest(OrderValidation.orderDataSchema),
  OrderDataController.orderDataCreate,
);
router.post("/payment-intent", OrderDataController.orderDataCreate);

router.get("/get-order-data", OrderDataController.getMyOrderData);

router.get("/get-cancel-data", OrderDataController.getMyCancelOrderData);

router.delete("/cancel-order", OrderDataController.cancelOrder);

export const OrderDataRouter = router;
