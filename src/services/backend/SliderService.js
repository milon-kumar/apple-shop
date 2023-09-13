import { catechError } from "../../helper/helper.js";
import ProductSliderModel from "../../models/ProductSliderModel.js"


export const updateOrCreate = async (req) =>{
    try {
        const id = req.params.id
        const data = req.body
        let response;
        if (id) {
            response = await ProductSliderModel.findByIdAndUpdate(id, { $set: data })
        } else {
            response = await ProductSliderModel.create(data);
        }
        return {
            success: true,
            message: "Data Create Or Update Success ",
            data: response,
        }
    } catch (error) {
        return await catechError(error)
    }
}