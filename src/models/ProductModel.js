import mongoose from "mongoose";
import { Schema } from "mongoose";

const DataSchema = new Schema({
    brandId:{type:Schema.ObjectId},
    categoryId:{type:Schema.ObjectId},
    title:{type: String,trim: true,required: true,},
    slug:{type: String,trim: true,required: false,lowercase: true},
    shortDescription:{type: String,trim: true,required: true,},
    discount:{type: Boolean,default: false},
    discountPrice:{type: String},
    image:{type: String,required: true},
    stock:{type: Boolean,default: true,required: true},
    star:{type: String,required:false},
    remark:{type: String,required:true,enum:['new','trending','popular','top','spatial','regular']}
},{timestamps:true,versionKey: false});

const ProductModel = mongoose.model('products',DataSchema);

export default ProductModel;