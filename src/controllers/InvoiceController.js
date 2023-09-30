import { CalculateInvoice } from "../services/InvoiceService.js"

export const InvoiceCreate = async (req,res)=>{
    const result = await CalculateInvoice(req)
    return res.status(200).json(result)
}

export const InvoiceList = async (req,res)=>{
    return res.status(200).json({
        success:true,
        message:"Invoice List",
    })
}

export const InvoiceProductList = async (req,res)=>{
    return res.status(200).json({
        success:true,
        message:"Invoice Product List",
    })
}

export const PaymentSuccess = async (req,res)=>{
    return res.status(200).json({
        success:true,
        message:"Payment Success",
    })
}

export const PaymentCancel = async (req,res)=>{
    return res.status(200).json({
        success:true,
        message:"Payment Cancel",
    })
}

export const PaymentFail = async (req,res)=>{
    return res.status(200).json({
        success:true,
        message:"Payment Fail",
    })
}

export const PaymentIpn = async (req,res)=>{
    return res.status(200).json({
        success:true,
        message:"Payment Ipn",
    })
}