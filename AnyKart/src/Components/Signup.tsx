import React from "react"
import iphone from "../assets/images/iphone.jpg"
const Card=()=>{
    return(
        <div className=" p-2  border shadow-xl w-1/3 flex "> 
              <div className="">
            <img className=" h-[250px]" src={iphone} alt="none"/>
        </div>
        <div className=" p-2">
       <h1 className="font-bold text-[20px] m-4 ">Apple iPhone-12 PRO </h1>
      
       <div className="m-4 text-[20px] font-bold">Price : $1000 
       </div>
       <button className=" m-4 rounded-md bg-black text-white text-[20px] p-4">View Item</button>
        </div>
        </div>
        )
}
const Signup=()=>{
return(
    <div className="flex justify-center flex-wrap">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/> <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>

    </div>
)
}
export default Signup