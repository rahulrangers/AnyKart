import React, { useState ,} from "react";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../store/authstate";
import { Button, Menu, MenuItem } from "@mui/material";
const Navbar=()=>{
    const navigate = useNavigate();
    const [toggle,setToggle]=useState(false)
    const [user ,setuser]= useRecoilState(userState)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
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
            ):(
            <>
            <button className="mx-2 rounded-md p-2 hover:bg-orange-600">{user}</button>
            <button className="mx-2 rounded-md p-2 hover:bg-orange-600" onClick={()=>{
           navigate("signup")
           console.log(user)
           setuser('');
           console.log(user)
            }}>Logout</button>
            </>
            )}
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