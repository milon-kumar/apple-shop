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
        let remark=req.params.remark

        const products = await ProductModel.aggregate([
            {$project:{"_id":0}},
            {$lookup:}
    ])


        return {status:"success", data:products}
        
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
            error: error
        }
    }


}