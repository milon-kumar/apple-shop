const mongoose = import('mongoose');

const Schema = mongoose.Schema({
    categoryName:{type:String,trim:true,required:true,unique:true},
    slug:{type:String,trim:true,required:false,unique:true,lowercase:true},
    categoryImg:{type:String,trim:true},
},{timestamps:true,versionKey:false});

const CategoryModel = mongoose.model('categories',Schema);

export default CategoryModel;