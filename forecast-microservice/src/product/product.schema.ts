import * as mongoose from 'mongoose';
export const ProductSchema = new mongoose.Schema({
    name: String,
    price:Number,
    description:String,
    storeName: String,
})