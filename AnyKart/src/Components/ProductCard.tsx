import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
interface data{
    Productid : number,
    Image:string,
    price:number,
    description:String,
    name:String,
    stock:String
    }
const ProductCard=()=>{
    const [product,setproduct] = useState<data>()
    const {id} = useParams();
    const getproduct = async()=>{
        const res = await fetch(`http://localhost:5000/admin/product/${id}`,{
            method:"GET",
        })
        const product = await res.json()
        console.log(" i am coding again u can see ")
        console.log(product)
        setproduct(product)

    }
    useEffect(()=>{
        getproduct()
    },[])
    if(product!= undefined){
    const {Image,name,price} = product;
    return(
<div >
<div className="w-full grid grid-cols-2">
    <div className="py-5">
        <img className="mx-auto h-[400px] shadow-2xl duration-500 hover:scale-105" src={Image} alt="none"/>
    </div>
    <div className=" p-4">
   <h1 className="font-bold text-[40px] m-4 ">${name}</h1>
   <div className="text-[20px] m-4 ">Iphone 12 PRO is one of a kind phone. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam deserunt labore atque, explicabo autem laboriosam, quidem temporibus dolorem enim ut nesciunt aliquid asperiores ea, voluptas amet sequi recusandae tempore mollitia a eligendi?</div>
   <div className="m-4 text-[40px] font-bold">Price : {price}
   </div>
   <button className=" m-4 rounded-md bg-black text-white text-[20px] p-4">Add to Cart</button>
   </div> 
</div>
</div>
    )
    }
}
export default ProductCard