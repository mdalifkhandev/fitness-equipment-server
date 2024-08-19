import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsyinc";
import sendResponse from "../../utils/sendResponse";
import { AuthService } from "./auth.service";
import config from "../../config";

const loginUser=catchAsync(async(req,res)=>{
    const resualt=await AuthService.loginUserFeomDb(req.body)
    const {accessToken,refressToken}=resualt

    res.cookie("refressToken",refressToken,{
        secure:config.NODE_NEW==='Devlopment',
        httpOnly:true,
        sameSite:true,
        maxAge: 100 * 60 * 60 * 24 * 365
    })


    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'User is Logged in Successfully',
        data:{
            accessToken,
        }
    })
})


export const AuthController={
    loginUser
}