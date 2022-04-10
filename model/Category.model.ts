import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate"

let CategorySchema =new mongoose.Schema({
    id:{type:String , required:true},
    name : {type:String,required:true},
    price: {type:Number,required:true}
    

    
})
CategorySchema.plugin(mongoosePaginate);
const Category = mongoose.model("Category",CategorySchema)
//export default Category;