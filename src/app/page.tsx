" use client"
import React from "react";
import { Header } from "./admin/_components/Header";
import { Footer } from "./admin/_components/Footer";
import  Category  from "./admin/_components/Category";

export default function Home (){
    return (
      <div>
        <Header />
        <div>
            {/* <Category /> */}
        </div>
        <Footer />  
      </div>
    );
};



