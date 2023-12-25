import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import user from "./routes/user";
import product from "./routes/product";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { OAuth2Client } from "google-auth-library";
import { UserRefreshClient } from "google-auth-library";
dotenv.config();
const oAuth2Client = new OAuth2Client(
  process.env.client_id,
  process.env.client_secret,
  'postmessage',
);

const DATABASE_URL = process.env.DATABASE_URL
async function connect() {
    try{
      if(typeof DATABASE_URL === 'string')
    await mongoose.connect(DATABASE_URL);
  else
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
app.post('/auth/google', async (req, res) => {

  const { tokens } = await oAuth2Client.getToken(req.body.code); 
  console.log(tokens);
  res.json(tokens);
});
app.post('/auth/google/refresh-token', async (req, res) => {
  const user = new UserRefreshClient(
    process.env.client_id,
    process.env.client_Secret,
    req.body.refreshToken,
  );
  const { credentials } = await user.refreshAccessToken();
  res.json(credentials);
})


app.use("/",user);
app.use("/admin",product);
app.listen(port, ()=>{
    console.log("Listening to the port")
})

