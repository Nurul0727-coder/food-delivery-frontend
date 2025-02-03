// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import {Food} from "@/components/Food";
// import { useAuth } from "@clerk/nextjs";
// import { QuoteIcon } from "lucide-react";


// export type OrderItem = {
//     food: Food;
//     quantity: number;
//     };

//     export default function Foods() {
//     const [foodOrderItems, setOrderItems] = useState<OrderItem[]>([]);

//     const { isLoading, data: foods } = useAuthFetch("foods");

//     if (isLoading) {
//     return <div>Loading...</div>;
//     // localStorage.setItem("orderItems", JSON.stringify(foodOrderItems)); 

//     const addFoodToOrder = (food: Food) => {
//         localStorage.setItem(
//             "orderItems", 
//             JSON.stringify([
//                 {
//                     food:food,
//                     quantity: 1,
//                 },
//             ])
//         );
//     // const addFoodToOrder = (food: Food) => {

//         const oldValues = localStorage.getItem("orderItems");
//         const orderItems = oldValues ? JSON.parse(oldValues) : [];
//         const oldFood = orderItems.find(
//             (item: OrderItem) => item.food.id === food._id
//         );
//         if (oldFood) {
//             oldFood.quantity += 1;
//         } else {
//             oldOrderItems.push({ 
//                 food, 
//                 quantity: 1 ,
//             });
//         }
//     };
//     return (
//       <div className=" grid grid-cols-3 gap-4">
//                 {foods.map((food) => (
//                     <div  className="flex justify-center p-2 border" key={food._id}>
//                         <FoodCard key={food._id} food={food} />
//                         <Button onClick={() => {}}>+1</Button>
//                     </div>
//                 ))}
//       </div>
//     );
// };



