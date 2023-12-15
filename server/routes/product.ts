import { Router} from "express";
const router = Router();
const Secret = process.env.Secret
import  jwt  from 'jsonwebtoken';
import Product from "../db/product";
import { Request,Response } from "express";
import mongoose from "mongoose";
interface product {
    name?: string,
 description ?:string,
 Image ?:string,
 price ?: number,
 category ?:string,
 stock ?:string
}
router.post("/addproduct",async(req :Request,res:Response)=>{
 const {price,stock,image, name,description,category} = req.body;
 
const product = await Product.create({
    name:name,
    description:description,
    Image: image,
    price : price,
    category:category,
    stock : stock
})
res.status(200).json({
    message:"successfully added product",
    product:product,
})
})
router.get("/products",async(req :Request,res:Response)=>{
    try{
const products = await Product.find({});
res.status(200).json(products);
    }
    catch(error){
        res.status(400).json({error});
    }
}
)
router.get("/product/:id",async(req : Request, res:Response)=>{
    const _id =  new mongoose.Types.ObjectId(req.params.id);
    const product = await Product.findById(_id)
        if(product){
            res.status(200).json(product);
        }
        else{
            res.status(400).json({msg:"some error with id of product"});   
        }
    
    
})
export default router;