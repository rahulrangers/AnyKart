
import React, { useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { Button } from "@mui/material";
import { useRecoilState } from "recoil";
import { emailstate, imagestate, userState } from "../store/authstate";

import axios from "axios";
const Signup = () => {
  const [user , setUser] = useRecoilState(userState);
  const [Email,setEmail] = useRecoilState(emailstate)
  const [Image,setImage] = useRecoilState(imagestate)
  const details =(token:string)=>{
    const accessToken = token;
    localStorage.setItem("token",accessToken);
     fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log('User Details:', data);
      setUser(data.name);
      setEmail(data.email);
      setImage(data.picture);
      console.log(Email);
      console.log(Image);
      console.log(user)
    })
    .catch(error => console.error('Error fetching user details:', error));
  }
  const login = useGoogleLogin({
    onSuccess: async ({ code }) => {
      console.log(code)
      const tokens = await axios.post('http://localhost:5000/auth/google', {  
        code,
      });
  
      console.log(tokens.data.access_token);
      if(typeof tokens.data.access_token === 'string'){
      details(tokens.data.access_token);
      }
    },
    flow: 'auth-code',
  });
    const [username,setuser]= useState("");
    const [email,setemail]= useState("");
    const [password,setpassword]= useState("");
    const [image,setimage] = useState("");
    const getuser=async()=>{
        console.log(username);
        const response = await fetch("http://localhost:5000/signin",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
            username,
            email,
            password,
            image
        })
        })
        const user = await response.json();
        alert(user.message)
        }
  return (
   
    <div className="w-screen h-screen bg-slate-300 flex items-center justify-center">
      <div className="flex flex-col  shadow-2xl bg-white w-96 p-6 border">
      <Button  variant = "contained" onClick={() => login()}>Sign in with Google</Button>
      <div className="m-2 text-[20px] font-extrabold mx-auto">---------------OR---------------</div>
        <div className="text-[24px] font-bold mx-auto ">Create Account</div>
        <input className="m-4 rounded-md text-[20px] p-2 border border-black" type="text" placeholder="Username" onChange={(e)=>{setuser(e.target.value)}} />
        <input className="m-4 rounded-md text-[20px] p-2 border border-black" type="text" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}} />
        <input className="m-4 rounded-md text-[20px] p-2 border border-black" type="text" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}} />
      
        <div className="rounded-md mx-3 text-[20px] font-extrabold">Upload Your Image :</div>
        
        <input className="m-2" type="file" id="img" name="img" accept="image/*" onChange={(e)=>{
          if(e.target.files != null)
          setimage(URL.createObjectURL(e.target.files[0]))
        }}/>
        <button className="bg-black text-[20px] font-bold text-white rounded-md p-3 m-2
        " onClick={getuser}>signup</button>
      
      </div>
    </div>
  );
};

export default Signup;
