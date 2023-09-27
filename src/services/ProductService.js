import BrandModel from "../models/BrandModel.js"
import CategoryModel from "../models/CategoryModel.js"
import ProductModel from "../models/ProductModel.js"
const fetchBrandByProduct = { $lookup: { from: 'brands', localField: 'brandId', foreignField: '_id', as: 'brand' } }
const fetchCategoryByProduct = { $lookup: { from: 'categories', localField: 'categoryId', foreignField: '_id', as: 'category' } }
const projection = { $project: { "category._id": 0, "brand._id": 0, "_id": 0,"brandId":0,"categoryId":0,"remark":0, } }
const unwindBrand = {$unwind:"$brand"}
const unwindCategory = {$unwind:"$category"}

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
        const remark = req.params.remark
        const products = await ProductModel.aggregate(
            [
                { $match: { remark: remark } },
                fetchBrandByProduct,
                fetchCategoryByProduct,
                projection,
                unwindBrand,
                unwindCategory
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

export const categoryProduct = async (req) => {
    try {
        const slug = req.params.slug
        const category =  await CategoryModel.findOne({slug:slug}).select("_id")
        const products =  await ProductModel.aggregate(
            [
                { $match: { categoryId: category._id } },
                fetchBrandByProduct,
                fetchCategoryByProduct,
                projection,
                unwindBrand,
                unwindCategory
            ]
        )
        return {
            success: true,
            message: "Product Get By Category Success",
            data:products   
        }
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
            error: error.message
        }
    }
}


export const brandProduct = async (req) => {
    try {
        const slug = req.params.slug
        const brand =  await BrandModel.findOne({slug:slug}).select("_id")
        const products =  await ProductModel.aggregate(
            [
                { $match: { brandId: brand._id } },
                fetchBrandByProduct,
                fetchCategoryByProduct,
                projection,
                unwindBrand,
                unwindCategory
            ]
        )
        return {
            success: true,
            message: "Product Get By Brand Success",
            data:products   
        }
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
            error: error.message
        }
    }
}

export const smilierProduct = async (req) => {
    try {
        const slug = req.params.slug
        const category =  await CategoryModel.findOne({slug:slug}).select("_id")
        const products =  await ProductModel.aggregate(
            [
                { $match: { categoryId: category._id } },
                {$limit:10},
                fetchBrandByProduct,
                fetchCategoryByProduct,
                projection,
                unwindBrand,
                unwindCategory
            ]
        )
        return {
            success: true,
            message: "Smilier Product Get Success",
            data:products   
        }
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
            error: error.message
        }
    }
}
export const productDetails = async (req) => {
    try {
        const slug = req.params.slug
        const products =  await ProductModel.aggregate(
            [
                { $match: { slug: slug } },
                fetchBrandByProduct,
                fetchCategoryByProduct,
                projection,
                unwindBrand,
                unwindCategory
            ]
        )
        return {
            success: true,
            message: "Product Details Get Success",
            data:products   
        }
    } catch (error) {
        return {
            success: false,
            message: "Something went wrong",
            error: error.message
        }
    }
}