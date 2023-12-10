import { NextFunction,Response,Request } from "express";
import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.Secret
const verify = (req:Request, res:Response, next:NextFunction) => {
    const token = req.headers.authorization ;
    if (!token) {
        res.status(403).json("cannot find the token error");
    }
    
    else {
        if(typeof JWT_SECRET ==='string'){
        const data = jwt.verify(token, JWT_SECRET);
        if(typeof data ==='string')
        req.headers["userid"] = data;
        next();
        }
    }
}
export default verify;
