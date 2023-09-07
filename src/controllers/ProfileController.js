import { UserProfileDetails, UserProfileSave } from "../services/user/UserService.js"

export const CreateProfile = async (req,res)=>{
    return res.status(200).json({
        data:req.headers,
    })
}

export const ReadProfile = async ()=>{
    const result = await UserProfileDetails(req)
    return res.status(200).json(result)
}

export const UpdateProfile = async ()=>{
    const result = await UserProfileSave(req)
    return res.status(200).json(result)
}