import React, { useState } from "react";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../store/authstate";
import { Button } from "@mui/material";
const Navbar=()=>{
    const [toggle,setToggle]=useState(false)
    const user = useRecoilValue(userState)
    return(
<div className=" flex w-full py-2  items-center justify-between text-[20px]  text-white font-bold bg-slate-800">
    <div className="mx-2 ">AnyKart</div>
    <div >
        <ul className="hidden md:flex " >
            <Link to={"/"}>
            <li className="mx-2 rounded-md p-2  hover:bg-orange-600">Home</li>
            </Link>
            {!user?(<>
            <Link to={"/signup"}>
            <li className="mx-2 rounded-md p-2 hover:bg-orange-600">Signup</li>
            </Link>
            <Link to={"/login"}>
            <li className="mx-2 rounded-md p-2 hover:bg-orange-600">Login</li>
            </Link>
            </>
            ):
            <Button  variant = "contained">{user}</Button>
            }
            <li className="mx-4 rounded-md p-2 hover:bg-orange-600">Contact Us</li>
        </ul>
        {toggle?
        <AiOutlineClose className=" md:hidden mx-4" onClick={()=>{
        setToggle(!toggle)
        } }/>
        :
        <AiOutlineMenu className="  md:hidden mx-4" onClick={()=>{
        setToggle(!toggle)

        }}/>
        }
        <ul className={` duration-300 md:hidden w-full h-full top-10 bg-black fixed ${toggle? 'left-0': 'left-[-100%]' }` } >
            <Link to={"/"}>
            <li className="mx-2 my-10">Home</li>
            </Link>
            <Link to={"/signup"}>
            <li className="mx-2 my-10">Signup</li>
            </Link>
            <li className="mx-2 my-10">Login</li>
            <li className="mx-2 my-10">Contact Us</li>
        </ul>

         </div>
</div>
    )
}
export default Navbar;