
import React from "react"
const Contact = ()=>{
return(
    <>
    <div className=" my-4 flex justify-center  text-4xl  font-bold">
        Contact Us
    </div>
    <div className="my-3 p-2  md:grid md:grid-cols-3 " >
  <div  className=" py-20  h-96 text-2xl m-1  font-serif bg-green-300 rounded-3xl ">
 <div className="flex justify-center">Address</div>
 <div className="flex justify-center ">IIT jodhpur,Jodhpur</div>
<div className="flex justify-center">Rajasthan,India</div> 
 
  </div>
    <div className=" py-20  text-2xl font-serif m-1 bg-orange-200  text-orange-600 rounded-3xl">
        <div className="flex justify-center" >Phone</div>
        <div className="flex justify-center">You can contact us through Mobile</div>
        <div className="flex justify-center">Call now to : 87860404xxx</div>
        </div>  
        <div   className=" py-16 text-2xl font-serif m-1 bg-blue-200 rounded-3xl">
            <div className="flex justify-center">Email</div>
            <div className="flex justify-center">You can ask your doubts and </div>
            <div className="flex justify-center"> questions by sending us emails </div>
            <div className="flex justify-center">Email: contact@gmail.com</div>
        </div>
    </div>
    </>
)
}
export default Contact