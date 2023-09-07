import mongoose from "mongoose";
const { Schema } = mongoose;

const DataSchema = new Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,required:true},
    image:{type: String,required:false},
    cus_name:{type: String,required: true},
    cus_add:{type: String,required: true},
    cus_city:{type: String,required: true},
    cus_state:{type: String,required: true,default:"Dhaka"},
    cus_postcode:{type: String,required: true,default:"1205"},
    cus_country:{type: String,required: true,default:"Bangladesh"},
    cus_phone:{type: String,required: true},
    cus_fax:{type: String,required: true,default:"000 000 000"},

    ship_name:{type: String,required: true},
    ship_add:{type: String,required: true},
    ship_city:{type: String,required: true},
    ship_state:{type: String,required: true,default:"Dhaka"},
    ship_postcode:{type: String,required: true,default:"1205"},
    ship_country:{type: String,required: true,default:"Bangladesh"},
    ship_phone:{type: String,required: true},

},{timestamps:true,versionKey:false});

const ProfileModel = mongoose.model('profiles',DataSchema);

export default ProfileModel;