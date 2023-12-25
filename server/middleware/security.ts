import { NextFunction,Response,Request,Express } from "express";

import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.Secret
const authent = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      console.log("No token found");
      res.status(403).json("cannot find the token error");
      return;
    }
    if (typeof JWT_SECRET === 'string') {
      try {
        const data = jwt.verify(token, JWT_SECRET);
        if (typeof data=== 'object') {
          req.headers["userid"] = data.email;
          next();
        } else {
          console.log("Invalid token");
          res.status(403).json("invalid token");
        }
      } catch (error) {
        console.error("Error", error);
        res.status(500).json("internal error");
      }
    }
  };
  export default authent
  