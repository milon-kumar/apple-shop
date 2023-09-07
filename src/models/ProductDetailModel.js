const mongoose = import('mongoose');

const Schema = mongoose.Schema({
    img1:{type:String,required:true},
    img2:{type:String},
    img3:{type:String},
    img4:{type:String},
    des:{type:String},
    color:{type:String,required: false},
    size:{type:String,required: false},
    productId:{type:mongoose.Schema.Types.ObjectId,required:true}
},{timestamps:true,versionKey:false});

const ProductDetailModel = mongoose.model('productDetails',Schema);

export default ProductDetailModel;