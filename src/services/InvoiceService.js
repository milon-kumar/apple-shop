import mongoose from "mongoose"
import CartModel from "../models/CartModel.js"
import ProfileModel from "../models/ProfileModel.js"
import InvoiceModel from "../models/InvoiceModel.js"

const ObjectId = mongoose.Types.ObjectId

export const CalculateInvoice = async (req)=>{
    try {

        const userId = new ObjectId(req.headers.userId)

        const data = await CartModel.aggregate([
            {$match:{userId:userId}},
            {$group:{_id:0,total:{$sum:{$toInt:"$price"}}}}
        ])

        const profile = await ProfileModel.aggregate([
            {$match:{userId:userId}},
        ])

        const payable = data[0].total
        const tranId = Math.floor(1000000000 + Math.random() * 9000000000)
        const valId = 0
        const deliveryStatus = "pending"
        const paymentStatus = "pending"

        const customerDetails = `Name : ${profile[0].cus_name} , Phone : ${profile[0].cus_phone} , State : ${profile[0].cus_state} , Address : ${profile[0].cus_add}`
        const shipingDetails = `Name : ${profile[0].ship_name} , Phone : ${profile[0].ship_phone} , State : ${profile[0].ship_state} , Address : ${profile[0].ship_add}`

        const invoice = await InvoiceModel.create({
            userId:userId,
            total:payable,
            vat:5,
            payable:payable,
            cus_details:customerDetails,
            ship_details:shipingDetails,
            tran_id:tranId,
            val_id:valId,
            delivery_status:deliveryStatus,
            payment_status:paymentStatus
        })

        return {
            success: true,
            message: "Data Delete Success ",
            data: invoice,
        }
        //Invoice Calculation

        //Panding payment invoice create

        //Invoice Product List Create

        //SSL Comarze Payment Gatway call - return Gatway URL


    } catch (error) {
        return {
            success: false,
            message: "Something went wrong ",
            errors:error.message,
        } 
    }
}