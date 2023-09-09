import { allBrands, allCategories, remarkProducts } from "../services/ProductService.js"

export const BrandList = async (req,res)=>{
    const result = await allBrands()
    return res.status(200).json(result)
}

export const CategoryList = async (req,res)=>{
    const result = await allCategories();
    return res.status(200).json(result)
}

export const SliderList = async (req,res)=>{
    return res.status(200).json()
}

export const ListByCategoryProduct = async (req,res)=>{
    return res.status(200).json()
}

export const ListByBrandProduct = async (req,res)=>{
    return res.status(200).json()
}

export const ListByKeywordProduct = async (req,res)=>{
    return res.status(200).json()
}

export const ListBySmilierProduct = async (req,res)=>{
    return res.status(200).json()
}

export const ListByReviewProduct = async (req,res)=>{
    return res.status(200).json()
}

export const ListByRemarkProduct = async (req,res)=>{
    const result = await remarkProducts(req)
    return res.status(200).json(result)
}

export const ProductDetails = async (req,res)=>{
    return res.status(200).json()
}

export const CartList = async (req,res)=>{
    return res.status(200).json()
}

export const CreateCart = async (req,res)=>{
    return res.status(200).json()
}

export const RemoveCart = async (req,res)=>{
    return res.status(200).json()
}

export const ListWishProduct = async (req,res)=>{
    return res.status(200).json()
}

export const CreateWishProduct = async (req,res)=>{
    return res.status(200).json()
}

export const RemoveWishProduct = async (req,res)=>{
    return res.status(200).json()
}
