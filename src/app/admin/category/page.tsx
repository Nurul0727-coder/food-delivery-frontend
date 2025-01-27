"use client"

import { useAuth } from "@clerk/nextjs"
import { useEffect } from "react"

export default function Page() {
    const {getToken}= useAuth();

    async function getCategories(){
        const token = await getToken();

        console.log({token});
    
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories?token=${token}`,{
            // headers:{
            //     auth:token,
            // }
        })
        .then((res)=>res.json())
        .then((data)=>console.log(data));
    }

    useEffect(()=>{
        getCategories();
    });
    return(
        <div>Categoties</div>
    )
}