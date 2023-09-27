import mongoose from "mongoose";
import { Schema } from "mongoose";

const DataSchema =new Schema({
    userId:{type:Schema.ObjectId,required:true},
    productId:{type:Schema.ObjectId,required:true},
    qty:{type:String,required:true},
    price:{type:String,required:true},
    color:{type:String,required:true},
    size:{type:String,required:true},
},{timestamps:true,versionKey:false});

const CartModel = mongoose.model('carts',DataSchema);

export default CartModel;