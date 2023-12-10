import React from "react";

const Login = () => {
  return (
    <div className="fixed w-screen h-screen bg-slate-300 flex items-center justify-center">
      <div className="flex flex-col items-center shadow-2xl bg-white w-96 h-96 border">
        <div className="text-[36px] font-bold">Login</div>
        <input className="m-4 rounded-md text-[20px] p-2 border border-black" type="text" placeholder="Email" />
        <input className="m-4 rounded-md text-[20px] p-2 border border-black" type="text" placeholder="Password" />
        <button className="bg-black text-[20px] font-bold text-white rounded-md p-4">Login</button>
      </div>
    </div>
  );
};

export default Login;
