import React from "react"
import Navbar from "./Components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import ProductPage from "./Components/ProductPage"
import ProductCard from "./Components/ProductCard"
import Contact from "./Components/Contact"
import {RecoilRoot} from "recoil"
const App=()=>{
return(
   
<div>
   <BrowserRouter>
   <RecoilRoot>
   <div className="fixed w-full">
   <Navbar/>
   </div>
   <div className="py-16">
    <Routes>
        <Route path="/" element={<Home/>} />
       <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/productpage/:category" element={<ProductPage/>}/>
        <Route path="/productpage/:category/product/:id" element={<ProductCard/>}/>
        </Routes>
        </div>
        </RecoilRoot>
        </BrowserRouter> 

</div>
)
}
export default App