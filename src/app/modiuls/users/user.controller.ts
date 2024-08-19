import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsyinc";
import sendResponse from "../../utils/sendResponse";
import { UserServises } from "./user.service";

const createUser = catchAsync(async (req, res) => {
  console.log(req.body);

  const resualt = await UserServises.createUserFromDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Created Successfully",
    data: resualt,
  });
});

export const UserController = {
  createUser,
};
