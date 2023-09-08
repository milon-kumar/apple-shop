import BrandModel from "../models/BrandModel.js"
import CategoryModel from "../models/CategoryModel.js"
import ProductModel from "../models/ProductModel.js"

export const allBrands = async () => {
    try {
        const brands = await BrandModel.find()
        return {
            success: true,
            message: "Brand Get Success",
            data: brands
        }

    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
            error: error
        }
    }
}

export const allCategories = async () => {
    try {
        const categories = await CategoryModel.find()
        return {
            success: true,
            message: "Category Get Success",
            data: categories
        }

    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
            error: error
        }
    }
}

export const remarkProducts = async (req) => {
    try {
        const remark = req.params.remark
        const products = ProductModel.aggregate([
            { $match: { remark: remark } },
            { $lookup: { from: "categories", localField: "categoryId", foreignField: "_id", as: "category" } },
            { $lookup: { from: "brands", localField: "brandId", foreignField: "_id", as: "brand" } },
            { $unwind: "$category" },
            { $unwind: "$brand" },
            { $project: {} },
        ])

        return {
            success: true,
            message: "Product Get By Remark Success",
            data: products
        }
        
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
            error: error
        }
    }


}