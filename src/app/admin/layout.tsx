'use client'

import Categories from './_components/Category';
import { TfiMenuAlt } from "react-icons/tfi";
import { CiDeliveryTruck } from "react-icons/ci";
import { LuSettings } from "react-icons/lu";
import Appetizers from './_components/Appetizers';
import {Uploader} from './_components/Uploader';
// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton
// } from '@clerk/nextjs'
// import { Children } from 'react';

export default function Home() {


  return (
    <div className='bg-slate-100'>
      {/* <div>
      <ClerkProvider>
//           <SignedOut>
//             <SignInButton />
//           </SignedOut>
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//     </ClerkProvider>

      </div> */}
    <div className='h-[100vh] w-[205px] bg-white '>
      <img className=" pt-[50px] text-black" src="LogoContainer.png" alt="header logo" />
      <div >
        <button className='w-[165px] h-[40px] rounded-full mt-[50px] flex justify-center gap-3 pt-[6px] font-medium text-sm hover:bg-black hover:text-white'><TfiMenuAlt  className=' w-[22px] h-[22px]'/> Food menu </button>
        <button className='w-[165px] h-[40px] rounded-full  mt-[30px] flex justify-center gap-8 pt-[6px] font-medium text-sm hover:bg-black hover:text-white'><CiDeliveryTruck className='w-[22px] h-[22px] s '/> Orders </button>
        <button className='w-[165px] h-[40px] rounded-full mt-[30px] flex justify-center gap-6 pt-[6px] font-medium text-sm hover:bg-black hover:text-white' ><LuSettings className=' w-[22px] h-[22px]'/>Settings </button>
      </div>

      <div>
        <div className='w-[100%] h-[176px] mt-[-250px]'>< Categories/> </div>
        <div className='w-[100%] h-[582px]  mt-[50px]'>
          < Appetizers />
        </div>
      </div>
    </div>
    </div>
  );
}












// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <ClerkProvider>
//           <SignedOut>
//             <SignInButton />
//           </SignedOut>x
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//           {children}
//     </ClerkProvider>
//   )
// }