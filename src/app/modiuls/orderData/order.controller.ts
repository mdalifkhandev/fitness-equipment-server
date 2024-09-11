import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsyinc";
import sendResponse from "../../utils/sendResponse";
import { OrderDataService } from "./order.service";

const orderDataCreate = catchAsync(async (req, res) => {
  const resualt = await OrderDataService.createOrderDataFromDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order Data Created SuccessFully",
    data: resualt,
  });
});

export const OrderDataController = {
  orderDataCreate,
};
