import UserModel from "../../models/UserModel.js";
import { EncodeToken } from "../../utils/JwtToken.js";
import SendEmail from "../../utils/SendEmail.js";

export const UserOtp = async (req)=>{
    const email = req.params.email;
    const OTP = Math.floor(100000 + Math.random() * 900000);
    const emailText = `Your Verification Code is : ${OTP}`;
    const subject = `OTP Verification`;
    try {
        //const sendEmailStatus = await SendEmail(email, emailText, subject);
        const userUpdateOrCreateStatus = await UserModel.updateOne({email:email},{$set:{otp:OTP}},{upsert:true});
        return {
            success: true,
            message: "Email Send Success",
            data:{
                OTP,
                sendEmailStatus,
                userUpdateOrCreateStatus,
            }
        }
    } catch (error) {
        return {
            success: 'fail',
            message: "Something Went Wrong",
            error,
        }
    }
}

export const UserOtpVerify = async (req)=>{
    const email = req.params.email;
    const OTP = req.params.otp;

    const verifyRes = await UserModel.find({email:email,otp:OTP}).count('total');
    const userId = await UserModel.find({email:email,otp:OTP}).select("_id");
    try {
        if (verifyRes === 1) {
            const token = EncodeToken(email,userId[0]['_id'].toString());
            await UserModel.updateOne({email:email},{$set:{otp:null}},{upsert:true})
            return {
                success: true,
                message: "Login Success",
                token,
            }
        } else {
            return {
                success: false,
                message: "Invalide email or otp",
            }
        }
    } catch (error) {
        return {
            success:false,
            message:"Somthing Want Wrong",
            error,
        }
    }
}

export const UserProfileSave = async (req)=>{
    const data = req.headers;
    return {
        success:true,
        message:"Create User Profile",
        data,
    }
}

export const UserProfileDetails = async (req)=>{
    return {
        success:true,
        message:"Read User Profile",
    }
}