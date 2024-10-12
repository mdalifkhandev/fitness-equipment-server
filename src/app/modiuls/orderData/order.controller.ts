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

const getMyOrderData = catchAsync(async (req, res) => {
  const email = req.query.email as string;
  const resualt = await OrderDataService.getMyOrderFrolDB(email);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order Data Retrive SuccessFully",
    data: resualt,
  });
});
const getMyCancelOrderData = catchAsync(async (req, res) => {
  const email = req.query.email as string;
  const resualt = await OrderDataService.getMyCancelOrderFrolDB(email);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order Cancel Data Retrive SuccessFully",
    data: resualt,
  });
});
const cancelOrder = catchAsync(async (req, res) => {
  const id = req.query.id as string;
  const resualt = await OrderDataService.cancelOrderFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order Deleted SuccessFully",
    data: resualt,
  });
});
const getMyAllOrder = catchAsync(async (req, res) => {
  const idArray = req.query.ids;

  let ids: string[] = [];
  if (typeof idArray === "string") {
    ids = idArray?.split(",");
  }
  const resualt = await OrderDataService.getMyAllOrderFromDB(ids);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " Order All Data Retrive SuccessFully",
    data: resualt,
  });
});

export const OrderDataController = {
  orderDataCreate,
  getMyOrderData,
  cancelOrder,
  getMyCancelOrderData,
  getMyAllOrder,
};
