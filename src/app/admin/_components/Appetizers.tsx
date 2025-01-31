'use client'

import { useEffect, useState } from "react";
import { Uploader } from "./Uploader";

type AppetizersType = {
  categoryName: string;
  _id: string;
}

export default function Appetizers() {
    const [categories, setCategories] = useState<AppetizersType[]>([]);

    const addCategory = async () => {
        const categoryName = prompt('Enter new category name');
        const response = await fetch('http://localhost:8000/food-category', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ categoryName })
        });
        const data = await response.json();
        setCategories([...categories, data.newItem]);
    }

  return (
    <div className='w-[1171px] h-[582px] bg-white mt-[50px] ml-[250px] rounded-xl'>
      <h1 className="font-semibold text-2xl text-gray-800 pt-5 pl-5">Appetizers</h1>
      <div className='w-[270px] h-[241px] border-[1px] rounded-3xl border-dashed border-red-500'>
           < Uploader />
          </div>
      <div className="space-y-2 flex gap-4">
        {categories.map((category) => (
          <div key={category._id} className="p-1 border-[1px] border-[#E4E4E7] rounded-full hover:border-red-500 w-[156px]  ">
            {category.categoryName}
           
          </div>

        ))}
      </div>
    </div>
  )
}
