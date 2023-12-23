
import React, { useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { Button } from "@mui/material";
import { useRecoilState } from "recoil";
import { userState } from "../store/authstate";
const Signup = () => {
  const [user , setUser] = useRecoilState(userState);

  const details =(token:string)=>{
    const accessToken = token;
     fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log('User Details:', data);
      setUser(data.name);
    })
    .catch(error => console.error('Error fetching user details:', error));
    
  }
  const login = useGoogleLogin({
    onSuccess: tokenResponse => details(tokenResponse.access_token),
  });
    const [username,setuser]= useState("");
    const [email,setemail]= useState("");
    const [password,setpassword]= useState("");
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
        })
        })
        const user = await response.json();
        alert(user.message);
        }
  return (
    <div className="fixed w-screen h-screen bg-slate-300 flex items-center justify-center">
      <div className="flex flex-col items-center shadow-2xl bg-white w-96 p-5 border">
        <div className="text-[36px] font-bold ">Signup</div>
        <input className="m-4 rounded-md text-[20px] p-2 border border-black" type="text" placeholder="Username" onChange={(e)=>{setuser(e.target.value)}} />
        <input className="m-4 rounded-md text-[20px] p-2 border border-black" type="text" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}} />
        <input className="m-4 rounded-md text-[20px] p-2 border border-black" type="text" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}} />
        <button className="bg-black text-[20px] font-bold text-white rounded-md p-3 m-2" onClick={getuser}>signup</button>
      <Button  variant = "contained" onClick={() => login()}>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Signup;
