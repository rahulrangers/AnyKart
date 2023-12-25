import React, { useEffect, useState ,} from "react";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../store/authstate";
import { Button, Menu, MenuItem } from "@mui/material";
const Navbar=()=>{
    const navigate = useNavigate();
    const [toggle,setToggle]=useState(false)
    const [user ,setUser]= useRecoilState(userState)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const getuser = async()=>{
      console.log("hi");
      console.log( localStorage.getItem("token"))
      const response = await fetch("http://localhost:5000/getuser",{
      method:'GET',
      headers:{
        Authorization : localStorage.getItem("token"),
        'Content-Type': 'application/json',
      },
      })
      const data = await response.json();
      if(data == "internal error"){
       const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        const data =await response.json();
        console.log(data);
        setUser(data.name);
      }
     else
      setUser(data.name);
    }
    useEffect(()=>{
    getuser()
    },[]) 
    return(
<div className=" flex w-full py-4 items-center justify-between text-[20px]  text-white font-bold bg-slate-800">
    <div className="mx-2 ">AnyKart</div>
    <div >
        <ul className="hidden md:flex " >
            <Link to={"/"}>
            <li className="mx-2 rounded-md p-2  hover:bg-orange-600">Home</li>
            </Link>
            {localStorage.getItem("token")?.length==0?(<>
            <Link to={"/signup"}>
            <li className="mx-2 rounded-md p-2 hover:bg-orange-600">Signup</li>
            </Link>
            <Link to={"/login"}>
            <li className="mx-2 rounded-md p-2 hover:bg-orange-600">Login</li>
            </Link>
            </>
            ):(

            <>
            <button className="mx-2 rounded-md p-2 hover:bg-orange-600">{user}</button>
            <button className="mx-2 rounded-md p-2 hover:bg-orange-600" onClick={()=>{
           navigate("signup")
           localStorage.setItem("token","");
            }}>Logout</button>
            </>
            )}
            <Link to={"/contact"}>
            <li className="mx-4 rounded-md p-2 hover:bg-orange-600">Contact Us</li>
            </Link>
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
            <li>
      <Button
     
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="text-white"
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to={"/productpage/Mobiles"}>
        <MenuItem onClick={handleClose}>Mobiles</MenuItem>
        </Link>
        <Link to={"/productpage/Grocery"}>
        <MenuItem onClick={handleClose}>Grocery</MenuItem>
        </Link>
        <Link to={"/productpage/Fashion"}>
        <MenuItem onClick={handleClose}>Fashion</MenuItem>
        </Link> 
        <Link to={"/productpageFurniture"}>
        <MenuItem onClick={handleClose}>Furniture</MenuItem>
        </Link>
        <Link to={"/productpage/Electronics"}>
        <MenuItem onClick={handleClose}>Electronics</MenuItem>
        </Link>
        <Link to={"/productpage/Tv"}>
        <MenuItem onClick={handleClose}>TV</MenuItem>
        </Link>
      </Menu>
    </li>
            <Link to={"/signup"}>
            <li className="mx-2 my-10">Signup</li>
            </Link>
            <Link  to={"/login"}>
            <li className="mx-2 my-10">Login</li>
            </Link>
            <li className="mx-2 my-10">Contact Us</li>
        </ul>

         </div>
</div>
    )
}
export default Navbar;