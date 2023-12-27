import { Router} from "express";
const router = Router();
import dotenv from "dotenv";
dotenv.config();
const Secret = process.env.Secret
import User from '../db/user'
import  jwt  from 'jsonwebtoken';
import authent from "../middleware/security"
import { Request,Response } from "express";
interface user {
    username:string,
    email:string,
    password:string
}
router.post("/signin",async(req :Request,res:Response)=>{
    const{username,email,password,image}= req.body;
    console.log(username)
    try{
        const user  = await User.create({
            username:username,
            email:email,
            password : password,
            image:image
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
   const user = await User.findOne({email :email })
    if (user) {
        if(user.password != undefined)

        if(user.password == password){
            if(typeof Secret === 'string'){
        const token = jwt.sign({email}, Secret);
        res.json({ message: 'Logged in successfully', token,email:user.email,image:user.image,name:user.username });
            }
        } 
        else{
            res.status(400).json({msg:"please enter correct password"})
        } 
    }
    else{
        res.status(400).json({msg:"user doesn't exist",token:""});
    }    
})
router.get("/getuser",authent,async(req : Request,res:Response)=>{

const email = req.headers["userid"];
console.log(email)
const user = await User.findOne({email :email })
if (user) {
    console.log(user);
    res.json({email:user.email,name:user.username ,image:user.image});
        
}
else{
    res.status(400).json({msg:"user doesn't exist"});
}  
})

export default router;
