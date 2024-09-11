import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { TUserInfo, TUsers } from "./user.interfach";
import { User, UserInfo } from "./user.model";

const createUserFromDB = async (payloads: TUsers) => {
  const email = payloads.email;
  const isExixitUser = await User.findOne({ email });
  if (isExixitUser) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Account already opened with this email",
    );
  }

  const resualt = await User.create(payloads);
  return resualt;
};

const createUserInfoFromDB = async (payload: TUserInfo) => {
  const email = payload.email;
  const isExixitUserInfo = await UserInfo.findOne({ email });
  const user = await User.findById(payload.userID);
  if (isExixitUserInfo) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "User Information is alrady exixit",
    );
  }
  if (!user) {
    throw new AppError(httpStatus.BAD_REQUEST, "This user is not exixit");
  }
  if (user.email !== payload.email) {
    throw new AppError(httpStatus.BAD_REQUEST, "This user is not exixit");
  }

  const resualt = await UserInfo.create(payload);
  return resualt;
};

const getUserInfo = async (email: string) => {
  if (!email) {
    throw new AppError(httpStatus.BAD_REQUEST, "Pleade login and Try again");
  }
  const user = await UserInfo.findOne({ email });

  if (user?.email !== email) {
    throw new AppError(httpStatus.BAD_REQUEST, "Pleade login and Try again");
  }

  const resualt = await UserInfo.findOne({ email });
  return resualt;
};
const getUser = async (email: string) => {
  if (!email) {
    throw new AppError(httpStatus.BAD_REQUEST, "Pleade login and Try again");
  }
  const user = await User.findOne({ email });
  if (user?.email !== email) {
    throw new AppError(httpStatus.BAD_REQUEST, "Pleade login and Try again");
  }

  const resualt = await User.findOne({ email });
  return resualt;
};

export const UserServises = {
  createUserFromDB,
  createUserInfoFromDB,
  getUserInfo,
  getUser,
};
