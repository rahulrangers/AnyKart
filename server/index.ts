import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import user from "./routes/user";
import product from "./routes/product";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL
async function connect() {
    try{
      if(typeof DATABASE_URL === 'string')
    await mongoose.connect(DATABASE_URL);
  else
    console.log("error with the url")
    console.log("connected to the mongoose");
    } 
    catch(error){
        console.log(error);
    }
  }
connect();

const app = express();
const port=5000;
app.use(bodyParser.json());
app.use(cors());
app.use("/",user);
app.use("/admin",product);
app.listen(port, ()=>{
    console.log("Listening to the port")
})

