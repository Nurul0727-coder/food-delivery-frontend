'use client';

import { FaFacebook, FaInstagram  } from "react-icons/fa";


export const Footer = () => {
return(
    <footer className="bg-black text-white py-6 mt-12 w-[100%] h-[755px]">
        <div className="w-[100%] h-[92px] bg-[#EF4444] mt-[50px] flex justify-around text-3xl font-semibold items-center">
            <p>Fresh fast delivered</p>
            <p>Fresh fast delivered</p>
            <p>Fresh fast delivered</p>
            <p>Fresh fast delivered</p>
        </div>
        <div className="w-[80%] h-[228px] bg-black mt-[70px] ml-[100px]">
            <div>
            <div className="flex justify-between ">
            <img className="w-[88px] h-[94px]" src="Logo.png" alt="Logo" />
                <div className="">
                    <p className="text-[#71717A] ">NOMNOM</p>
                    <p className="text-white mt-[10px]">Home </p>
                    <p className="text-white mt-[10px]">Contact us</p>
                    <p className="text-white mt-[10px]">Delivery zone</p>
                </div>
                <div className="flex justify-between gap-16">
                    <div>

                    <p className="text-[#71717A]">MENU</p>
                    <p className="text-white mt-[10px]">Appetizers</p>
                    <p className="text-white mt-[10px]">Salads</p>
                    <p className="text-white mt-[10px]">Pizzas</p>
                    <p className="text-white mt-[10px]">Lunch favorites</p>
                    <p className="text-white mt-[10px]">Main dishes</p>

                    </div>
                    <div>
                    <p className="text-black">MENU</p>
                    <p className="text-white mt-[10px]">Side dishes</p>
                    <p className="text-white mt-[10px]">Brunch</p>
                    <p className="text-white mt-[10px]">desserts</p>
                    <p className="text-white mt-[10px]">Beverages</p>
                    <p className="text-white mt-[10px]">Fish & Sea foods </p>
                    </div>
                </div>
                <div>
                    <p className="text-[#71717A]">FOLLOW US</p>
                    <div className="flex gap-4 mt-[20px]">
                    <FaFacebook className="w-[28px] h-[27px]" />
                    <FaInstagram  className="w-[28px] h-[27px]"/>
                    </div>
                </div>
            </div>
            </div>
            <div className="w-[1264px] h-[84px] bg-black text-[#71717A] mt-[150px] flex justify-start  rounded-t border-pink-400
            ">
                <div className="gap-11 flex">
                <p> Copy right 2024 © Nomnom LLC</p>
                <p>Privacy Policy</p>
                <p>Terms of Condition</p>
                <p>Cookie Policy</p>
                </div>
            </div>
        </div >
    </footer>
);
};