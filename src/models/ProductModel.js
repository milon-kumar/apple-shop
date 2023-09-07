const mongoose = import('mongoose');

const Schema = mongoose.Schema({
    title:{type: String,trim: true,required: true,},
    slug:{type: String,trim: true,required: false,lowercase: true},
    shortDes:{type: String,trim: true,required: true,},
    discount:{type: Boolean,default: false},
    discountPrice:{type: String},
    image:{type: String,required: true},
    stock:{type: Boolean,default: true,required: true},
    star:{type: String},
    remark:{type: String,required:true,enum:['new','trending','popular','top','spatial','regular']}
},{timestamps:true,versionKey: false});

const ProductModel = mongoose.model('products',Schema);

export default ProductModel;