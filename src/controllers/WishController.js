import { allWish, createWishList, removeWish } from "../services/WishService.js"

export const WishList = async (req,res)=>{
    const result = await allWish(req)
    return res.status(200).json(result)
}

export const CreateWish = async (req,res)=>{
    const result = await createWishList(req)
    return res.status(200).json(result)
}

export const RemoveWish = async (req,res)=>{
    const result = await removeWish(req)
    return res.status(200).json(result)
}
