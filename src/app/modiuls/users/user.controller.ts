import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsyinc";
import sendResponse from "../../utils/sendResponse";
import { UserServises } from "./user.service";

const createUser = catchAsync(async (req, res) => {
  const resualt = await UserServises.createUserFromDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Created Successfully",
    data: resualt,
  });
});
const createUserInfo = catchAsync(async (req, res) => {
  const resualt = await UserServises.createUserInfoFromDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Information Created Successfully",
    data: resualt,
  });
});
const getUserInfo = catchAsync(async (req, res) => {
  const email = req.query.email as string;
  const resualt = await UserServises.getUserInfo(email);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Information Retrive Successfully",
    data: resualt,
  });
});
const getUser = catchAsync(async (req, res) => {
  const email = req.query.email as string;
  const resualt = await UserServises.getUser(email);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Retrive Successfully",
    data: resualt,
  });
});

export const UserController = {
  createUser,
  createUserInfo,
  getUserInfo,
  getUser,
};
