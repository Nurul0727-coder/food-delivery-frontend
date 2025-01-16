'use client'

import { useEffect, useState } from "react";

type CategoryType = {
  categoryName: string;
  _id:string;
}

export default function Category() {
  const [categories,setCategories]= useState<CategoryType[]>([]);

  const addCategory = async () =>{
    const categoryName = prompt('Enter new category name')
    const response = await fetch ('http://localhost:8005/food-category',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({categoryName})
    });
    const data = await response.json();
    setCategories([...categories, data.newItem]);
  };

  useEffect(()=>{
    const fetchData= async ()=>{
      const response = await fetch ('http://localhost:8005/food-category');
      const data = await response.json();
      setCategories(data);
    };

    fetchData();
  },[]);

  return (
  <div className="w-[1171px] h-[176px] bg-yellow-200 ml-[250px] rounded-xl">
    <h1 className="font-semibold ">Dishes category</h1>
    {categories.map((category)=> (
      <div key={category._id}> {category.categoryName}</div>
    ))}
    <button className="bg-red-600  m-5 w-[36px] h-[36px] rounded-full text-slate-50" onClick={addCategory}>
      +
      </button>
   </div>
  )
}
