import mongoose from "mongoose"
import CartModel from "../models/CartModel.js"
import ProductModel from "../models/ProductModel.js"
const ObjectId = mongoose.Types.ObjectId

export const CreateCartProduct = async (req)=>{
    try {
        req.body.userId = req.headers.userId
        const productId = req.body.productId

        const product = await ProductModel.findOne({_id:productId})
        let price = product.discountPrice
        if (product.discount) {
            price = (product.discountPrice - 20)
        }
        const totalPrice = price * req.body.qty

        req.body.price = totalPrice

        const response = await CartModel.updateOne({userId:req.body.userId,productId:productId},{$set:req.body},{upsert:true})
        return {
            success: true,
            message: "Data Create Or Update Success ",
            data: response,
        }
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong ",
            errors:error.message,
        }   
    }
}

export const CartProducts = async (req)=>{
    try {
        const userId = new ObjectId(req.headers.userId)
        const response = await CartModel.aggregate(
            [
                { $match: { userId:userId } },
                { $lookup: { from: 'products', localField: 'productId', foreignField: '_id', as: 'product' } },
                { $unwind:'$product' },
                { $lookup: { from: 'brands', localField: 'product.brandId', foreignField: '_id', as: 'brand' } },
                { $unwind:'$brand' },
                { $lookup: { from: 'categories', localField: 'product.categoryId', foreignField: '_id', as: 'category' } },
                { $unwind:'$category' },
                { $project:{'_id':0,'createdAt':0,'updatedAt':0,'product._id':0,'product.brandId':0,'product.categoryId':0,'product.createdAt':0,'product.updatedAt':0}}
            ])

            return {
                success: true,
                message: "Data Fatch Success ",
                data: response,
            }

    } catch (error) {
        return {
            success: false,
            message: "Something went wrong ",
            errors:error.message,
        }   
    }
}

export const RemoveCardProduct = async (req)=>{
    try {
        const cartId = req.params.id
        const response = await CartModel.deleteOne({_id:cartId})
        return {
            success: true,
            message: "Cart Item Delete Success ",
            data: response,
        }

    } catch (error) {
        return {
            success: false,
            message: "Something went wrong ",
            errors:error.message,
        }  
    }
}