import { DecodToken } from "../utils/JwtToken.js";

const AuthVerification = (req, res, next) => {
    const token = req.headers['token']
    try {
        const decodString = DecodToken(token);
        if (decodString === null) {
            return res.status(401).json({
                success: false,
                message: "Unautorize"
            })
        } else {
            req.headers.email = decodString['email'];
            next();
        }
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Unautorize",
            error
        })
    }
}

export default AuthVerification;