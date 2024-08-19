import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { TUsers } from "./user.interfach";
import { User } from "./user.model";

const createUserFromDB = async (payloads: TUsers) => {

    const email = payloads.email
    const isExixitUser = await User.findOne({ email })
    if (isExixitUser) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Account already opened with this email')
    }
    console.log(isExixitUser);

    const resualt = await User.create(payloads)
    return resualt
    // return null
}

export const UserServises = {
    createUserFromDB
}