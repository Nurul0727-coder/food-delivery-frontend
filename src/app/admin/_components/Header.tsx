'use client';

import { Button } from "@/components/ui/button";
import { FiUser, FiShoppingCart } from "react-icons/fi";

export const Header = () => {
return(
    <footer className="bg-purple-200 text-white w-[1440px] h-[68px]">
        <img src="LogoContainer.png" alt="header logo" />    
        <div>
            <button onClick={()=>Button} className="bg-white w-[75px] h-[36px] rounded-full"> Sign up</button>
            <FiShoppingCart />
            <button onClick={()=>Button} className="bg-[#EF4444] w-[41px] h-[20px] rounded-full"> Log in</button>
            <FiUser />

        </div> 

    </footer>
);
};