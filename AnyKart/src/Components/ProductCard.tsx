import React from "react"
import iphone from "../assets/images/iphone.jpg"
const ProductCard=()=>{
    return(
<div >
<div className="w-full grid grid-cols-2">
    <div className="py-5">
        <img className="mx-auto h-[400px] shadow-2xl duration-500 hover:scale-105" src={iphone} alt="none"/>
    </div>
    <div className=" p-4">
   <h1 className="font-bold text-[40px] m-4 ">Apple iPhone-12 PRO </h1>
   <div className="text-[20px] m-4 ">Iphone 12 PRO is one of a kind phone. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam deserunt labore atque, explicabo autem laboriosam, quidem temporibus dolorem enim ut nesciunt aliquid asperiores ea, voluptas amet sequi recusandae tempore mollitia a eligendi?</div>
   <div className="m-4 text-[40px] font-bold">Price : $1000 
   </div>
   <button className=" m-4 rounded-md bg-black text-white text-[20px] p-4">Add to Cart</button>
   </div> 
</div>
</div>
    )
}
export default ProductCard