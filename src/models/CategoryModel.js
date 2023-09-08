import mongoose from "mongoose"
import { Schema } from "mongoose";

const DataSchema = new Schema({
    categoryName:{type:String,trim:true,required:true,unique:true},
    slug:{type:String,trim:true,required:false,unique:true,lowercase:true},
    categoryImg:{type:String,trim:true},
},{timestamps:true,versionKey:false});

const CategoryModel = mongoose.model('categories',DataSchema);

export default CategoryModel;