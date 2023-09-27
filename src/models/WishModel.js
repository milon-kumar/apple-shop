import mongoose from "mongoose";
import { Schema } from "mongoose";

const DataSchema = new Schema({
    userId:{type:Schema.ObjectId,required:true},
    productId:{type:Schema.ObjectId,required:true}
},{timestamps:true,versionKey:false});


const WishModel = mongoose.model('wishes',DataSchema);

export default WishModel;