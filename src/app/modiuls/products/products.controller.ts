/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsyinc";
import sendResponse from "../../utils/sendResponse";
import { ProductsService } from "./products.service";

const getAllProducts = catchAsync(async (req, res) => {
  const query: any = req.query;
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
    message: "Catagory Retrive Successfully",
    data: resualt,
  });
});

const deleteProducts=catchAsync(async(req,res)=>{
  const id=req.query.id as string
  const resualt= await ProductsService.deleteProductsFromDB(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products Deleted Successfully",
    data: resualt,
  });
})

const updathProducts=catchAsync(async(req,res)=>{
  const id=req.query.id as string
  const body=req.body
  const resualt= await ProductsService.updathProductsFromDB(id,body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products Updath Successfully",
    data: resualt,
  });
})

///card
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
  const email = req.query.email as string;
  const resualt = await ProductsService.getAllAddToCardFromDB(email);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Your Card Retreve Successfully",
    data: resualt,
  });
});
const removeAddToCard = catchAsync(async (req, res) => {
  const id = req.params.id;
  const resualt = await ProductsService.removeAddToCardFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Your Card Remove Successfully",
    data: resualt,
  });
});

export const ProductsController = {
  getAllProducts,
  getSingleProducts,
  getProductsCatagore,
  deleteProducts,
  updathProducts,
  ///card
  createAddToCard,
  getAllAddToCard,
  removeAddToCard,
};
