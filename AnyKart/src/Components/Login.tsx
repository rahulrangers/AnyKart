
import React, { useState } from "react";
const Signup = () => {
    const [email,setemail]= useState("");
    const [password,setpassword]= useState("");
    const getuser=async()=>{
      console.log(email);
        const response = await fetch("http://localhost:5000/login",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
            email,
            password,
        })
        })
        const user = await response.json();
        alert(user.message);
        }
  return (
    <div className="fixed w-screen h-screen bg-slate-300 flex items-center justify-center">
      <div className="flex flex-col items-center shadow-2xl bg-white w-96 h-96 border">
        <div className="text-[36px] font-bold">Login</div>
        <input className="m-4 rounded-md text-[20px] p-2 border border-black" type="text" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}} />
        <input className="m-4 rounded-md text-[20px] p-2 border border-black" type="text" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}} />
        <button className="bg-black text-[20px] font-bold text-white rounded-md p-4" onClick={getuser}>Login</button>
      </div>
    </div>
  );
};

export default Signup;
