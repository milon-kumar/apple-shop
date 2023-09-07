import { UserOtp,UserOtpVerify } from "../services/user/UserService.js";

export const UserLogin = async (req, res) => {
    const result = await UserOtp(req);
    return res.status(200).json(result);
}

export const VerifyUser = async (req, res) => {

    const result = await UserOtpVerify(req);
    res.status(200).json(result);
}

export const UserLogout = async (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Logout User",
    })
}