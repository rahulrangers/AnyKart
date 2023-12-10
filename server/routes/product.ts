import { Router} from "express";
const router = Router();
const Secret = process.env.Secret
import  jwt  from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client/edge'
import { Request,Response } from "express";
const prisma = new PrismaClient()
router.post("/addproduct",async(req :Request,res:Response)=>{
 const {price,stock,image, name,description,category} = req.body;
const product = await prisma.product.create({
    data:{
        name:name,
        description:description,
        Image:image,
        price:price,
        category:category,
        stock:stock
    }
   
})
res.status(200).json({
    message:"successfully added product",
    product:product,
})
})
router.get("/products",async(req :Request,res:Response)=>{
    try{
const products = await prisma.product.findMany()
res.status(200).json(products);
    }
    catch(error){
        res.status(400).json({error});
    }
}
)
router.get("/product/:id",async(req : Request, res:Response)=>{
    const Productid = parseInt(req.params.id);
    const product = await prisma.product.findUnique({
        where:{
            Productid,
        }
    })
    if(product){
    res.status(200).json(product);
    }
    else{
        res.json({"msg": "no product is found for te given id"})
    }
})
export default router;