import mongoose from "mongoose";
import { Schema } from "mongoose";

const DataSchema = new Schema({
    brandName: { type: String, trim: true, required: true, unique: true },
    slug: { type: String, trim: true, required: false, unique: true, lowercase: true },
    brandImg: { type: String, trim: true },
}, { timestamps: true, versionKey: false });

const BrandModel = mongoose.model('brands', DataSchema);

export default BrandModel;