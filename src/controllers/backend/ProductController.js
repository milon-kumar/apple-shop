import { allProduct,updateOrCreate } from "../../services/ProductService.js";

export const product = async (req, res) => {
    const result = await allProduct(req);
    return res.status(201).json(result);
}

export const productSave = async (req, res) => {
    const result = await updateOrCreate(req);
    return res.status(201).json(result);
}
