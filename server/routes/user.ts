import { Router} from "express";
const router = Router();
const Secret = process.env.Secret
import  jwt  from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client/edge'
import { Request,Response } from "express";
const prisma = new PrismaClient()
router.post("/signin",async(req :Request,res:Response)=>{
    const{username,email,password}= req.body;
    try{
 const user = await prisma.user.create({
    data:{
        username:username,
        email:email,
        password : password,
    }
 })
 if(typeof Secret === 'string'){
 const token = jwt.sign({ email: req.body.email  } , Secret);
 res.status(200).json({
    token:token,
    message:"successfully created the account", 
    user:user
 })
 }
 
}
catch (error) {
    res.status(400).json({ msg: error })
}
})
router.post('/login', async(req:Request, res:Response) => {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
        where:{
email: email,
password:password
        }
    })
    if (user) {
        if(typeof Secret === 'string'){
        const token = jwt.sign(email, Secret);
        res.json({ message: 'Logged in successfully', token })
        }
    }
    else {
        res.status(404).json('Please enter correct details');
    }
})


export default router;