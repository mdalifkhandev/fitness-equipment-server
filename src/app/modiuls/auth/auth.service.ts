import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { User } from "../users/user.model";
import { TLoginUser } from "./auth.interfach";
import bcrypt from "bcrypt";
import { createToken } from "./auth.utils";
import config from "../../config";

const loginUserFeomDb = async (payloads: TLoginUser) => {
  const user = await User.findOne({ email: payloads.email });
  if (!user) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      " This email is not Exisit - Please create Account",
    );
  }
  const isPasswordMatch = await bcrypt.compare(
    payloads.password,
    user.password,
  );
  if (!isPasswordMatch) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Incorrecr password - Please Try again",
    );
  }
  if (user.isDeleted) {
    throw new AppError(httpStatus.BAD_REQUEST, "User is delelted");
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.JWT_ACCESS_TOKEN as string,
    config.JWT_ACCESS_TIME as string,
  );

  const refressToken = createToken(
    jwtPayload,
    config.JWT_REFRESS_TOKEN as string,
    config.JWT_REFRESS_TIME as string,
  );

  return {
    accessToken,
    refressToken,
  };
};

export const AuthService = {
  loginUserFeomDb,
};
