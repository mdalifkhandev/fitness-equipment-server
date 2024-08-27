import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsyinc";
import sendResponse from "../../utils/sendResponse";
import { ProductsService } from "./products.service";

const getAllProducts = catchAsync(async (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: any = req.query;
  // console.log(query);

  const resualt = await ProductsService.getAllProductsFromDB(query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products Retrive Successfully",
    data: resualt,
  });
});
const getSingleProducts = catchAsync(async (req, res) => {
  const params = req.params.id;
  const resualt = await ProductsService.getSingleProductsFromDB(params);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products Retrive Successfully",
    data: resualt,
  });
});
const getProductsCatagore = catchAsync(async (req, res) => {
  const resualt = await ProductsService.getProductsCatagoreFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products Retrive Successfully",
    data: resualt,
  });
});
const createAddToCard = catchAsync(async (req, res) => {
  const body = req.body;
  const resualt = await ProductsService.createAddToCardFromDB(body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Add To Card Successfully",
    data: resualt,
  });
});
const getAllAddToCard = catchAsync(async (req, res) => {
  const resualt = await ProductsService.getAllAddToCardFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Your Card Retreve Successfully",
    data: resualt,
  });
});
const removeAddToCard = catchAsync(async (req, res) => {
  const id=req.params.id
  const resualt = await ProductsService.removeAddToCardFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Your Card Retreve Successfully",
    data: resualt,
  });
});

export const ProductsController = {
  getAllProducts,
  getSingleProducts,
  getProductsCatagore,
  createAddToCard,
  getAllAddToCard,
  removeAddToCard
};
