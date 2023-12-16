import mongoose from "mongoose"
const productSchema = new mongoose.Schema({
name: {
    type : String,
  unique : true
},
 description :{
    type : String,
    unique : true
},
 Image :
 {
    type : String,
    unique : true
},
 price : {
    type : Number,
   
},
 category :{
    type : String,
 
 },
 stock :{
    type : String,
   }
})

export default mongoose.model("Product",productSchema);