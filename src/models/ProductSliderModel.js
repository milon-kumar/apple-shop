import mongoose from "mongoose";
import { Schema } from "mongoose";

const DataSchema = new Schema({
    title:{type:String,trim:true,required:true},
    slug:{type:String,trim:true,required:false,lowercase:true},
    description:{type:String,trim:true,required:true},
    image:{type:String,trim:true,required:true},
    productId:{type:Schema.Types.ObjectId,required:true}
},{timestamps:true,versionKey:false});

const ProductSliderModel = mongoose.model('productSliders',DataSchema);

export default ProductSliderModel;