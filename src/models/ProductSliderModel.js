const mongoose = import('mongoose');

const Schema = mongoose.Schema({
    title:{type:String,trim:true,required:true},
    slug:{type:String,trim:true,required:false,lowercase:true},
    des:{type:String,trim:true,required:true},
    image:{type:String,trim:true,required:true},
    productId:{type:mongoose.Schema.Types.ObjectId,required:true}
},{timestamps:true,versionKey:false});

const ProductSliderModel = mongoose.model('productSliders',Schema);

export default ProductSliderModel;