import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsyinc";
import sendResponse from "../../utils/sendResponse";
import { ProductsService } from "./products.service";

const getAllProducts = catchAsync(async (req, res) => {
  const resualt = await ProductsService.getAllProductsFromDB();
  console.log(resualt);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products Retrive Successfully",
    data: resualt,
  });
});
const getSingleProducts = catchAsync(async (req, res) => {
    const params=req.params.id
  const resualt = await ProductsService.getSingleProductsFromDB(params);
  console.log(resualt);
  
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products Retrive Successfully",
    data: resualt,
  });
});

export const ProductsController = {
  getAllProducts,
  getSingleProducts
};
