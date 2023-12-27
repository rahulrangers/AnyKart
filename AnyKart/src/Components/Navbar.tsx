import React, { useEffect, useState ,} from "react";
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { emailstate, imagestate, userState } from "../store/authstate";
import { Button, Menu, MenuItem } from "@mui/material";
const Navbar=()=>{
    const navigate = useNavigate();

    const [image,setimage] = useRecoilState(imagestate)
    const [email,setemail] = useRecoilState(emailstate)
    const [toggle,setToggle]=useState(false)
    const [user ,setUser]= useRecoilState(userState)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const togglechange=()=>{
      setToggle(false);
    }
    const handleClose = () => {
      setToggle(false)
      setAnchorEl(null);
    };
    const getuser = async()=>{
      const response = await fetch("http://localhost:5000/getuser",{
      method:'GET',
      headers:{
        Authorization : localStorage.getItem("token")??'',
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
        setUser(data.name);
        setimage(data.picture)
        setemail(data.email)
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
            { !localStorage.getItem("token")===null||localStorage.getItem("token")?.length===0?(<>
            <Link to={"/signup"}>
            <li className="mx-2 rounded-md p-2 hover:bg-orange-600">Signup</li>
            </Link>
            <Link to={"/login"}>
            <li className="mx-2 rounded-md p-2 hover:bg-orange-600">Login</li>
            </Link>
            </>
            ):(
            <>
            <Link to={"/profile"}>
            <button className="mx-2 rounded-md p-2 hover:bg-orange-600">{user}</button>
            </Link>
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
        <ul className={` duration-300 md:hidden w-full h-full top-14 bg-black fixed z-1 ${toggle? 'left-0': 'left-[-100%]' }` } >
            <Link to={"/"}>
            <li onClick={()=>{
setToggle(false); 
            }} className="mx-2 my-10">Home</li>
            </Link>
            <li>
      <button
       className="rounded-md p-2 hover:bg-orange-600 "
       onClick={handleClick}
      >
        Categories
      </button>
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
        <Link to={"/productpage/Furniture"}>
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
    { !localStorage.getItem("token")===null||localStorage.getItem("token")?.length===0?(<>
            <Link to={"/signup"}>
            <li onClick={togglechange} className="mx-2 my-10">Signup</li>
            </Link>
            <Link  to={"/login"}>
            <li onClick={togglechange}className="mx-2 my-10">Login</li>
            </Link>
            </>
            ):(
              <>
              <Link to={"/profile"}>
              <button onClick={togglechange} className=" my-10 rounded-md p-2 hover:bg-orange-600">{user}</button>
              </Link>
              <div>
              <button className="rounded-md p-2 hover:bg-orange-600" onClick={()=>{
             navigate("signup")
             localStorage.setItem("token","");
             setToggle(false);
              }}>Logout</button>
              </div>
              </>
              )}
            <Link to={"/contact"}>
            <li onClick={togglechange} className="mx-2 my-10">Contact Us</li>
            </Link>
        </ul>

         </div>
</div>
    )
}
export default Navbar;