import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { RecoilState, useRecoilState, useRecoilStoreID } from "recoil";
import { orderstate, userState } from "../store/authstate";

interface data{
    Productid : number,
    Image:string,
    price:number,
    description:string,
    name:string,
    stock:string
    }
const ProductCard=()=>{
    const [user,setuser] = useRecoilState(userState)
    const[orders,setorder]=useRecoilState(orderstate)
    const [product,setproduct] = useState<data>()
    const {id} = useParams();
    const getproduct = async()=>{
        const res = await fetch(`http://localhost:5000/admin/product/${id}`,{
            method:"GET",
        })
        const product = await res.json()
        setproduct(product)
    }
    useEffect(()=>{
        getproduct()
    },[])
    if(product!= undefined){
    const {Image,name,price,description} = product;
    const addcart=()=>{
        if(user){
        setorder((oldorders)=>
       [...oldorders,{
        name:name,
        prize:price
       },
        ])
        alert(`Added ${name} to the cart`)}
        else{
            alert("Please login inorder to add the item")
        }
    }
    return(
<div >
<div className="w-full md:grid md:grid-cols-2">
    <div className="py-5">
        <img className="mx-auto h-[400px] shadow-2xl duration-500 hover:scale-105" src={Image} alt="none"/>
    </div>
    <div className=" p-4">
   <h1 className="font-bold text-[40px] m-4 ">{name}</h1>
   <div className="text-[20px] m-4 ">{description}</div>
   <div className="m-4 text-[40px] font-bold">Price : ${price}
   </div>
   <button onClick={addcart} className=" m-4 rounded-md bg-black text-white text-[20px] p-4">Add to Cart</button>
   </div> 
</div>
</div>
    )
    }
}
export default ProductCard
