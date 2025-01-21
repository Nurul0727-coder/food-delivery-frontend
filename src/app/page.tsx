" use client"
import React from "react";
import { Header } from "./admin/_components/Header";
import { Footer } from "./admin/_components/Footer";

export default function Home (){
    return (
      <div>
        <Header />
        <h1>Home</h1>
        <p>Welcome to the home page</p>
        <Footer />  
      </div>
    );
};



