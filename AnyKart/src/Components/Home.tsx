import React, { useEffect, useState } from "react"
import laptop from "../assets/images/laptop.jpg"
import mobile from "../assets/images/mobile.jpg"
import Tv from "../assets/images/tv.jfif"
import Furniture from "../assets/images/furniture.jpg"
import electronics from "../assets/images/electronics.jfif"
import fashion from "../assets/images/fashion.jpg"
import grocery from "../assets/images/grocery.jfif"
import advertise from "../assets/images/advertise.jpg"
import Typed from "react-typed"
import { useNavigate } from "react-router-dom"
const Home=()=>{
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
return(
   <>
   {windowWidth>=767?(<>
   <div className="flex justify-between w-full py-4">
<div>
<img onClick={()=>{
navigate("/productpage/Mobiles");
}}className="hover:scale-105 duration-500 shadow-lg shadow-slate-500 rounded-full  mx-10  h-[80px] "src={mobile} alt="none"/>
<div className="flex justify-center font-bold">Mobiles</div>
</div>
<div>
<img onClick={()=>{
navigate("/productpage/Grocery");
}} className=" hover:scale-105 duration-500 shadow-lg shadow-slate-500 rounded-full  mx-10 h-[80px] "src={grocery} alt="none"/>
<div className="flex justify-center font-bold">Grocery</div>
</div>
<div>
<img  onClick={()=>{
navigate("/productpage/Fashion");
}}className=" hover:scale-105 duration-500 shadow-lg shadow-slate-500  rounded-full  mx-10  h-[80px] "src={fashion} alt="none"/>
<div className="flex justify-center font-bold">Fashion</div>
</div>
<div>
<img onClick={()=>{
navigate("/productpage/Furniture");
}} className="hover:scale-105 duration-500 shadow-lg shadow-slate-500  rounded-full  mx-10   h-[80px] "src={Furniture} alt="none"/>
<div className="flex justify-center font-bold">Furniture</div>
</div>
<div>
<img onClick={()=>{
navigate("/productpage/Electronics");
}} className=" hover:scale-105 duration-500 shadow-lg shadow-slate-500 rounded-full  mx-10   h-[80px] "src={electronics} alt="none"/>
<div className="flex justify-center font-bold">Electronics</div>
</div>
<div>
<img onClick={()=>{
navigate("/productpage/Tv");
}} className=" hover:scale-105 duration-500 shadow-lg shadow-slate-500 rounded-full  mx-10   h-[80px] "src={Tv} alt="none"/>
<div className="flex justify-center font-bold">TV</div>
</div>
   </div>
   </>):
   <></>}
   <div className="w-full  grid md:grid-cols-2  bg-slate-800 ">
    <div className=" p-2 mx-auto">
        <img src={advertise} alt="none"/>
    </div>
    <div className=" my-2 py-12 text-[40px] text-white mx-auto font-bold">
    <div>Welcome to AnyKart</div>
    <div>We Provide  <Typed strings={["Mobiles","Furniture","Television","Groceries","Electronics","Fashion"]}
    loop={true}
    typeSpeed={100}
    backSpeed={50}/>
</div>
<div>For Best Prices In India</div>
    </div>
    
   </div>
<div className="md:grid grid-cols-3 h-[300px]">
    <div className="border rounded-md  col-span-2">
        <img className="m-1" src={laptop} alt="none"/>
    </div>
    <div className="border bg-slate-800 border-black my-1 mx-2 col-span-1">
   <h1 className=" flex justify-center text-[30px] text-white font-bold">AnyKart</h1>
   <p className="text-slate-100 text-[20px] m-4">AnyKart is an E-Commerce website designed to make efficient buying and delivering experience to everyone and we provide good quality over here. We provide  wide variety of goods form all over the world.We provide good discount on eour products and don't compromise on quality of our product.We provide good discount on eour products and don't compromise on quality of our product.We provide good discount on eour products and don't compromise on quality of our product.We provide good discount on eour products and don't compromise on quality of our products</p>
    </div>  
   
</div>
</>
)
}
export default Home