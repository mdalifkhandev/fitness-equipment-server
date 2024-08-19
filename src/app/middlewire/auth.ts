import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { User } from "../modiuls/users/user.model";
import catchAsync from "../utils/catchAsyinc";
import AppError from "../error/AppError";

type TUserRole = {
  user: "user";
  seller: "sellwr";
};

const auth = (...requiredRoll: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError(httpStatus.NOT_FOUND, `You have not authrize`);
    }

    let decoded;
    try {
      decoded = jwt.verify(
        token,
        config.JWT_ACCESS_TOKEN as string,
      ) as JwtPayload;
    } catch (error) {
      throw new AppError(httpStatus.UNAUTHORIZED, "Unauthroized");
    }

    const { role, userId, iat } = decoded;

    if (requiredRoll && !requiredRoll.includes(role)) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        `You are unauthorized Pleasr login and try again`,
      );
    }

    const user = await User.findOne(userId);

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
    }
    // checking if the user is already deleted

    const isDeleted = user?.isDeleted;

    if (isDeleted) {
      throw new AppError(httpStatus.FORBIDDEN, "This user is deleted !");
    }

    req.user = decoded;
    next();
  });
};

export default auth;
