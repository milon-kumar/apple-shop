import { updateOrCreate } from "../../services/backend/SliderService.js"

export const createSider = async (req,res)=>{
    const result = await updateOrCreate(req)
    return res.status(201).json(result)
}