'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

type CategoryType = {
  categoryName: string;
  id:string;
}

export default function Category() {
  const [categories,setCategories]= useState<CategoryType[]>([]);

  useEffect(()=>{
    const fetchData= async ()=>{
      const response = await fetch ('http://localhost:8000/food-category');
      const data = await response.json();
      setCategories(data);
    };

    fetchData();
  },[]);

  return (
  <div>
    {categories.map((category)=> (
      <div key={category.id}> {category.categoryName}</div>
    ))}
    <button className="bg-slate-700">ADD NEW</button>
   </div>
  )
}
