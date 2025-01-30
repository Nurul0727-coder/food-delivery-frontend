'use client';
import {useState} from 'react';
import {Foods} from '@/components/Foods';
import {FoodCard} from '@/components/FoodCard';
import {Button} from '@/components/ui/button';
import {useAuthFetch} from '@/lib/useAuthFetch';

type OrderItems = {
    food: Foods;
    quantity: number;
};
export default function Home() {
const [orderItems, setOrderItems] = useState<OrderItems[]>([]);
const {isLoading, data: foods} = useAuthFetch('foods');
const onClick = (food: Foods) => {
    onPost('food-order', {foodOrderItems, totalPrice:1000});
};
return <Foods/>;
}

