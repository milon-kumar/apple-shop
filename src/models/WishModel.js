const mongoose = import('mongoose');

const Schema = mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,required:true},
    productId:{type:mongoose.Schema.Types.ObjectId,required:true}
},{timestamps:true,versionKey:false});

const WishModel = mongoose.model('wishes',Schema);

export default WishModel;