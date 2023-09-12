import mongoose from "mongoose";
import { Schema } from "mongoose";

const DataSchema = new Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,required:true},
    productId:{type:mongoose.Schema.Types.ObjectId,required:true}
},{timestamps:true,versionKey:false});

const WishModel = mongoose.model('wishes',DataSchema);

export default WishModel;