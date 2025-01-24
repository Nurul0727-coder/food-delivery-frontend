'use client'

import Categories from './_components/Category';
import { TfiMenuAlt } from "react-icons/tfi";
import { CiDeliveryTruck } from "react-icons/ci";
import { LuSettings } from "react-icons/lu";

export default function Home() {
  return (
    <div className='bg-slate-100'>
    <div className='h-[100vh] w-[205px] bg-white '>
      <img className=" pt-[50px] text-black" src="LogoContainer.png" alt="header logo" />
      <div >
        <button className='w-[165px] h-[40px] bg-yellow-400 rounded-full mt-[50px] flex justify-center gap-3 pt-[6px] font-medium text-sm hover:bg-black'><TfiMenuAlt  className='mt-[4px]'/> Food menu </button>
        <button className='w-[165px] h-[40px] bg-green-400 rounded-full mt-[30px] flex justify-center gap-3 pt-[6px] font-medium text-sm hover:bg-black'><CiDeliveryTruck className='mt-[4px]'/> Orders </button>
        <button className='w-[165px] h-[40px] bg-orange-400 rounded-full mt-[30px] flex justify-center gap-3 pt-[6px] font-medium text-sm hover:bg-black' ><LuSettings className='mt-[4px]'/>Settings </button>
      </div>
      
      {/* <Categories/> */}
    </div>
    </div>
    
  );

}