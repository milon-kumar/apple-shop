import { CartProducts, CreateCartProduct, RemoveCardProduct } from "../services/CartService.js"

export const CartList = async (req,res)=>{
    const result = await CartProducts(req) 
    return res.status(200).json(result)
}

export const CreateCart = async (req,res)=>{
    const result = await CreateCartProduct(req)
    return res.status(200).json(result)
}

export const RemoveCart = async (req,res)=>{
    const result = await RemoveCardProduct(req)
    return res.status(200).json(result)
}