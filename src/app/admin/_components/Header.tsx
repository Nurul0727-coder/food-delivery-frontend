'use client';

import { Button } from "@/components/ui/button";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa6";

export const Header = () => {
return(
    <header>
        <div className="bg-[#18181B] text-white w-[100%] h-[68px] flex justify-between pl-[100px] pr-[100px]" >
         <img className="w-[146px] h-[44px]" src="LogoContainer.png" alt="header logo" />    
           <div className="flex justify-around  gap-[15px]">
            <div className="w-[251px] h-[36px] bg-white rounded-full flex justify-around pt-[8px]">
            <GrLocation  className="text-red-500 "/>
            <button onClick={()=>Button} className="text-red-500 flex justify-between  text-xs "> Delivery address:</button>
            <button onClick={()=>Button} className="text-[#71717A] flex justify-between text-xs pl-[-20px]"> Add Location </button>
            <FaAngleRight className="text-[#71717A]" />
            </div>
            <button onClick={()=>Button} className="w-[36px] h-[36px] bg-white rounded-full text-black flex justify-center pt-[10px]"><FiShoppingCart /></button>
            <button onClick={()=>Button} className="bg-[#EF4444] w-[36px] h-[36px] rounded-full text-white flex justify-center pt-[10px]"> <FiUser /></button>
         </div> 
    </div>
    <img src="HeaderImg.png" alt="Img"  className="w-[100%] h-[570px]"/>
  
    </header>
    
);
};