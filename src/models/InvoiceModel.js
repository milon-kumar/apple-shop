import mongoose from 'mongoose';
import { Schema } from 'mongoose';
const DataSchema = new Schema({
    userId:{type:Schema.ObjectId,required:true},
    total:{type:String,required:true},
    vat:{type:String,required:true},
    payable:{type:String,required:true},
    cus_details:{type:String,required:true},
    ship_details:{type:String,required:true},
    tran_id:{type:String,required:true},
    val_id:{type:String,required:true,default:false},
    delivery_status:{type:String,required:true},
    payment_status:{type:String,required:true},
},{timestamps:true,versionKey:false});

const InvoiceModel = mongoose.model('invoices',DataSchema);

export default InvoiceModel;