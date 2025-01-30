import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import {ShoppingBasket} from 'lucide-react';
import { useEffect, useState } from "react";
import { OrderItem } from "./(component)/Foods";

  export const OrderSheets = () => {
    const existingOrderString = localStorage.getItem('orderItems');
    const existingOrder = JSON.parse(existingOrderString || '[]');

    const[foodOrderItems, setOrderItems] = useState<OrderItem[]>(existingOrder);

    const onMiunusOrderItem = (idx:number) => {
        const newOrderItems = foodOrderItems.map((orderItem, index) => {
            if (index === index && orderItem.quantity > 1) {
                return {
                    ...orderItem,
                    quantity: orderItem.quantity - 1,
                };
            } else {
            return orderItem;
        };
        });
        setOrderItems(newOrderItems);
        localStorage.setItem('orderItems', JSON.stringify(newOrderItems));
        };

    const onPlusOrderItem = (idx:number) => {
            const newOrderItems = foodOrderItems.map((orderItem, index) => {
                if (index === index) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity - 1,
                    };
                } else {
                return orderItem;
            };
            });
            setOrderItems(newOrderItems);
            };

   useEffect(()=>{
      const existingOrderString = localStorage.getItem('orderItems');
      const existingOrder = JSON.parse(existingOrderString || '[]');
                setOrderItems(existingOrder);
            }, [existingOrderString]);
    return (
      <Sheet>
        <SheetTrigger>
          <ShoppingBasket />
        </SheetTrigger>
        <SheetContent>
            <SheetTitle>Order</SheetTitle>
            <div>
                {foodOrderItems?.map((orderItem: any, idx:number) => (
                    <div key={orderItem.food._id}>
                        <div>{orderItem?.food?.foodName}</div>
                        <div className="flex gap-2">
                           <button onClick={()=> onMiunusOrderItem(idx)}>-</button>
                           <p> {orderItem?.quantity}</p>
                           <button onClick={()=> onPlusOrderItem(idx)}>+</button>
                        </div>
                      </div>
                     ))}
            </div>
            <SheetClose asChild>
                <button>CHECKOUT</button>
            
            </SheetClose>
        </SheetContent>
      </Sheet>
    );
  };

  