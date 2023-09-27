import { allBrands, allCategories, remarkProducts ,categoryProduct,brandProduct,productDetails,smilierProduct} from "../services/ProductService.js"

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
    const result = await categoryProduct(req)
    return res.status(200).json(result)
}

export const ListByBrandProduct = async (req,res)=>{
    const result = await brandProduct(req)
    return res.status(200).json(result)
}

export const ListByKeywordProduct = async (req,res)=>{
    return res.status(200).json()
}

export const ListBySmilierProduct = async (req,res)=>{
    const result = await smilierProduct(req)
    return res.status(200).json(result)
}

export const ListByReviewProduct = async (req,res)=>{
    return res.status(200).json()
}

export const ListByRemarkProduct = async (req,res)=>{
    const result = await remarkProducts(req)
    return res.status(200).json(result)
}

export const ProductDetails = async (req,res)=>{
    const result = await productDetails(req)
    return res.status(200).json(result)
}
