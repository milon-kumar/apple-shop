import mongoose from "mongoose"
import WishModel from "../models/WishModel.js"
const ObjectId = mongoose.Types.ObjectId;
export const createWishList = async (req) => {
    try {
        req.body.userId = req.headers.userId
        const response = await WishModel.updateOne({userId:req.body.userId,productId:req.body.productId},{$set:req.body},{upsert:true})
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

export const allWish = async (req)=>{
    try {
       
        const user_id =new ObjectId(req.headers.userId)

        const response = await WishModel.aggregate(
            [
                { $match: { userId: user_id } },
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
            message: "Data Fatch Success asfsdafsadfa",
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

export const removeWish = async (req)=>{
    try {
        const userId = req.headers.userId
        const productId = req.params.id
        const response = await WishModel.deleteOne({userId:userId,productId:productId})
        return {
            success: true,
            message: "Data Delete Success ",
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