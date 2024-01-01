import {useRecoilState, useRecoilValue} from "recoil";
import { emailstate, imagestate, orderstate, userState } from "../store/authstate";
import React, { useEffect } from 'react';
import { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const Profile = ()=>{
    const[total,settotal]= useState(0);
    const [orders,setorder] = useRecoilState(orderstate)
    const image = useRecoilValue(imagestate)
    const user= useRecoilValue(userState)
    const email = useRecoilValue(emailstate)
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  var sum =0;
  useEffect(()=>{
    sum=0;
    orders.map(x=>sum+=x.prize);
    settotal(sum);
   ;
  },[orders])
  console.log(orders);
    return(
<div className="p-5 mx-auto my-32 w-5/12 md:h-96 border-2  bg-yellow-200 shadow-2xl shadow-black border-black">
    <div className="m-2 flex justify-start">
        <img className="w-24 h-24 rounded-full" src={image} alt="no-image" />
    </div>
    <div>
        <div className="text-[20px]  my-2 font-serif flex justify-start">Name: {user}</div>
        <div className="text-[20px] my-2 font-serif  break-words">Email : {email}</div>
      
        <div  className="my-4 flex justify-start" >
        <button className="bg-blue-500 rounded-md font-bold text-white p-2 shadow-sm shadow-black hover:bg-blue-700" onClick={handleOpen}>Incart</button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
        <div className="flex justify-between">
            <div className="font-extrabold mx-4">
            Orders
            </div>
            <div className="font-extrabold">
               Prize:
            </div>
            <div className="font-extrabold ">
               
            </div>
        </div>
      {
      orders.map(order=>
        <div className="flex my-2 p-2 justify-between font-sans border-black border-2 rounded-md shadow shadow-black">
       <div className="md:w-52 ">
       {order.name}
       </div>
       <div className="m-1" >
        ${order.prize}
       </div>
       <div className="m-1">
      <Button onClick={()=>{
        setorder(orders.filter(x=> x.name!=order.name))
      }} variant="contained">Remove</Button>
      </div>
       </div>
      )
      }
      <div className="p-2  font-sans" >
        Total : ${total}
      </div>
    </Typography>
  </Box>
</Modal>
        </div>
        
        </div>
</div>

    )
}

export default Profile;