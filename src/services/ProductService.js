import BrandModel from "../models/BrandModel.js"
import CategoryModel from "../models/CategoryModel.js"
import ProductModel from "../models/ProductModel.js"
const fetchBrandByProduct = { $lookup: { from: 'brands', localField: 'brandId', foreignField: '_id', as: 'brand' } }
const fetchCategoryByProduct = { $lookup: { from: 'categories', localField: 'categoryId', foreignField: '_id', as: 'category' } }


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

export const allProduct = async (req) => {
    try {
        const response = await ProductModel.find({})
        return {
            success: true,
            message: "Data Fetch Success ",
            data: response,
        }
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
            data: error.message
        }
    }
}

export const updateOrCreate = async (req) => {
    try {
        const id = req.params.id
        const data = req.body
        let response;
        if (id) {
            response = await ProductModel.findByIdAndUpdate(id, { $set: data })
        } else {
            response = await ProductModel.create(data);
        }
        return {
            success: true,
            message: "Data Create Or Update Success ",
            data: response,
        }
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
            data: error.message
        }
    }
}

export const remarkProducts = async (req) => {
    try {

        // let remark=req.params.remark

        // let JoinStage1={$lookup: {from: "categories", localField: "categoryID", foreignField: "_id", as: "category"}};
        // let JoinStage2={$lookup: {from: "brands", localField: "brandID", foreignField: "_id", as: "brand"}};

        // let matchStage= {$match: {remark:remark}}

        // let projectionStage= {$project: {'category._id': 0, 'brand._id': 0, 'categoryID':0, 'brandID':0}}

        // let unwindCategoryStage={$unwind: "$category"}
        // let unwindBrandStage={$unwind: "$brand"}

        // let data=await ProductModel.aggregate(
        //     [matchStage, JoinStage1, JoinStage2, unwindCategoryStage, unwindBrandStage, projectionStage]



        const remark = req.params.remark
        const products = await ProductModel.aggregate(
            [
                fetchBrandByProduct,
                fetchCategoryByProduct,
                { $match: { remark: remark } },
                { $project: { "category._id": 0, "brand._id": 0, "_id": 0,"brandId":0,"categoryId":0,"remark":0, } },
                {$unwind:"$category"},
                {$unwind:"$category"},
            ]
        )
        return {
            success: true,
            message: "Product Get By Remark Success",
            data: products
        }
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
            error: error.toString()
        }
    }
}