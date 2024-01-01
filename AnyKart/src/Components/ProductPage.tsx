import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
interface data{
_id: string,
Image:string,
price:number,
description:string,
name:string,
stock:string
category:string,
}
const Card=(props:any)=>{
    const navigate = useNavigate();
    const {image , name,price,id} = props;
    return(
        <div className=" p-2 border shadow-xl md:w-1/3 flex "> 
              <div className="">
            <img className=" h-[200px] w-[200px] sm:h-[250px] p-4" src={image} alt="none"/>
        </div>
        <div className=" p-2">
       <h1 className="font-bold text-[20px] m-4 flex justify-center">{name} </h1>
      
       <div className="m-4 text-[20px] font-bold flex justify-center">Price : ${price}
       </div>
       <button onClick={()=>{
       navigate(`product/${id}`)
       }}
        className=" m-4 rounded-md bg-black text-white text-[20px] p-4 flex justify-center ">View Item</button>
        </div>
        </div>
        )
}
const ProductPage=()=>{
const {category} = useParams();
const getproducts=async()=>{
    const res = await fetch(`https://anykart.onrender.com/admin/products/${category}`,{
        method:"GET",
    })
    const products = await res.json();
     setdata(products);
    }
    const [data,setdata] = useState<data[]>([])
    useEffect(()=>{
        getproducts()
    },[category])
    return(

       <>
        {typeof data === 'undefined'?(
            <div>
                loading......
                </div>

        ) :
(
    <div className="flex justify-center flex-wrap">
        {data.map( data=>
            <Card id = {data._id} category = {data.category} image={data.Image} name ={data.name} price = {data.price} stock={data.stock}/>
        )}
       
        </div>
)}
</>
    )
}
export default ProductPage