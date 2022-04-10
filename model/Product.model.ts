import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate"

let ProductSchema =new mongoose.Schema({
    id:{type:String },
    name : {type:String,required:true},
    price: {type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true, default:true},

    
})
ProductSchema.plugin(mongoosePaginate);
const Product = mongoose.model("Book",ProductSchema)
export default Product;