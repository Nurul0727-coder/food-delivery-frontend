// 'use client'

// import { useEffect, useState } from "react";

// type CategoryType = {
//   categoryName: string;
//   _id:string;
// }

// export default function Category() {
//   const [categories,setCategories]= useState<CategoryType[]>([]);

//   const addCategory = async () =>{
//     const categoryName = prompt('Enter new category name')
//     const response = await fetch ('http://localhost:8000/food-category',{
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body:JSON.stringify({categoryName})
//     });
//     const data = await response.json();
//     setCategories([...categories, data.newItem]);
//   };

//   useEffect(()=>{
//     const fetchData= async ()=>{
//       const response = await fetch ('http://localhost:8000/food-category');
//       const data = await response.json();
//       setCategories(data);
//     };

//     fetchData();
//   },[]);

//   return (
//   <div className="w-[1171px] h-[176px] bg-white ml-[250px] rounded-xl">
//     <h1 className="font-semibold  w-[1123px] h-[28px] pt-[20px] pl-[20px] text-xl">Dishes category</h1>
//     {categories.map((category)=> (
//       <div key={category._id}> {category.categoryName}</div>
//     ))}
//     <button className="bg-red-600  m-5 w-[36px] h-[36px] rounded-full text-slate-50 ml-[40px]" onClick={addCategory}>
//       +
//       </button>
//    </div>
//   )
// }

'use client'

import { useEffect, useState } from "react";

type CategoryType = {
  categoryName: string;
  _id: string;
}

export default function Category() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

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
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/food-category');
      const data = await response.json();
      setCategories(data);
    };

    fetchData();
  }, []);

  return (
    <div className="w-[1171px] h-[176px] bg-white ml-[250px] rounded-xl shadow-lg p-6">
      <h1 className="font-semibold text-2xl text-gray-800 mb-4">Dishes Category</h1>
      <div className="space-y-2 flex gap-4">
        {categories.map((category) => (
          <div key={category._id} className="p-1 border-[1px] border-[#E4E4E7] rounded-full hover:border-red-500 w-[156px]  ">
            {category.categoryName}
          </div>
        ))}
        <button 
        className="bg-red-600 w-[36px] h-[36px] rounded-full text-white flex items-center justify-center bottom-4 left-4 hover:bg-red-700 "
        onClick={addCategory}
      >
        +
      </button>
      </div>
    </div>
  )
}
