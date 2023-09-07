const mongoose = import('mongoose');

const Schema = mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,required:true},
    productId:{type:mongoose.Schema.Types.ObjectId,required:true},
    review:{type:String,required:true},
    ratting:{type:String,required:true},
},{timestamps:true,versionKey:false});

const ReviewModel = mongoose.model('reviews',Schema);

export default ReviewModel;