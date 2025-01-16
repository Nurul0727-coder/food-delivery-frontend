'use client'

import Categories from './_components/Category';

export default function Home() {
  return (
    <div className='h-[100vh] w-[205px] bg-pink-200'>
      <div className='w-[145px] h-[36px] rounded-full bg-slate-600 '>
      <p className='text-slate-800'></p>
      <Categories/>
    </div>
    </div>
    
  );

}