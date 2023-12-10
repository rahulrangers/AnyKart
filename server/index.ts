import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import user from "./routes/user";
import product from "./routes/product";
const app = express();
const port=5000;
app.use(bodyParser.json());
app.use(cors());
app.use("/",user);
app.use("/admin",product);
app.listen(port, ()=>{
    console.log("Listening to the port")
})

