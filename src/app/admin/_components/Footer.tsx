'use client';

import { FaFacebook, FaInstagram  } from "react-icons/fa";


export const Footer = () => {
return(
    <footer className="bg-black text-white py-6 mt-12 w-[100%] h-[755px]">
        <div className="w-[100%] h-[92px] bg-[#EF4444] ">
            <p>Fresh fast delivered</p>
            <p>Fresh fast delivered</p>
            <p>Fresh fast delivered</p>
            <p>Fresh fast delivered</p>
        </div>
        <div className="w-[1264px] h-[228px] bg-yellow-500">
            <div>
            <img src="Logo.png" alt="Logo" />
            <div>
                <div>
                    <p className="text-[#71717A]">NOMNOM</p>
                    <p className="text-white">Home </p>
                    <p className="text-white">Contact us</p>
                    <p className="text-white">Delivery zone</p>
                </div>
                <div>
                    <p className="text-[#71717A]">MENU</p>
                    <p className="text-white">Appetizers</p>
                    <p className="text-white">Salads</p>
                    <p className="text-white">Salads</p>
                    <p className="text-white">Pizzas</p>
                    <p className="text-white">Lunch favorites</p>
                    <p className="text-white">Main dishes</p>
                    <p className="text-white">Side dishes</p>
                    <p className="text-white">Brunch</p>
                    <p className="text-white">desserts</p>
                    <p className="text-white">Beverages</p>
                    <p className="text-white">Fish & Sea foods </p>
                </div>
                <div>
                    <p className="text-[#71717A]">FOLLOW US</p>
                    <FaFacebook className="" />
                    <FaInstagram />
                </div>
            </div>
            </div>
            <div className="w-[1264px] h-[84px] bg-green-400 text-[#71717A] br ">
                <p> Copy right 2024 © Nomnom LLC</p>
                <p>Privacy Policy</p>
                <p>Terms of Condition</p>
                <p>Cookie Policy</p>
            </div>
        </div >
    </footer>
);
};