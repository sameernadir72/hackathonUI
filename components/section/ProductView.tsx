
"use client";

import Image from "next/image";
import  { useState } from 'react';
import { Button } from "../ui/button";
import { ShoppingCart, X } from "lucide-react";
import { Product } from "@/app/utils/types";
import pro from "../../public/project.png"
import { useContext, useState } from "react";
import {contextProduct, contextVal } from "./CartContext";

export const ProductView = (product:Product) => {
  const {cartItems,setCartItems} = useContext(contextVal);
  const {cartProducts,setCartProducts} = useContext(contextProduct);

  const increaseCart = () => {
    setCartItems(cartItems+1);
    console.log(cartItems);
  }

  const addProduct = (product:Product) => {
    setCartProducts([...cartProducts,product]);
    console.log(cartProducts);
  }



export const ProductView = (product:Product) => {
  const [count ,setCount] = useState(0);
  const hanldeDecrement = () =>{
    if(count > 0){
      setCount(count - 1);   
    }
  }

  return (
    <div>
    <div className="flex justify-center my-10 gap-x-3">
      <Image src={product.image} alt="product image"></Image>
      <div className="flex flex-col ">
      <h1 className="my-1">{product.name}</h1>
      <h3 className="my-1">{product.category}</h3>
      <p className="my-1">SELECT SIZE</p>
      <ul className="flex space-x-5 my-1">
        <li className="h-10 w-10 hover:rounded-full hover:bg-gray-300 flex justify-center items-center">XS</li>
        <li className="h-10 w-10 hover:rounded-full hover:bg-gray-300 flex justify-center items-center">S</li>
        <li className="h-10 w-10 hover:rounded-full hover:bg-gray-300 flex justify-center items-center">M</li>
        <li className="h-10 w-10 hover:rounded-full hover:bg-gray-300 flex justify-center items-center">L</li>
        <li className="h-10 w-10 hover:rounded-full hover:bg-gray-300 flex justify-center items-center">XL</li>
      </ul>

      <h3>Quantity</h3>
      <Button className="bg-black py-5" onClick={()=>{
        increaseCart();
        addProduct(product);
        }}>

      <div className="flex gap-3 py-4">

      <h3 className="my-1">Quantity</h3>
      <div className="flex gap-2">
        <Button onClick={() => hanldeDecrement()} className="rounded-full">-</Button>
        <input type="number" min="1" max="20" value={count} className="w-9 "/>
        <Button onClick={() => setCount(count +1 )} className="rounded-full">+</Button>
      </div>
      </div>
      <div className="flex gap-4">

      <Button className="bg-black py-5">

        <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
      </Button>
      <div className="mt-3">

      <h1><b>$ {product.price}</b></h1>
      </div>
      </div>
      </div>
      </div>

      <div className="mx-auto px-40  ">
     
      <Image src={pro} alt="product" className="border-b-2 border-gray-200 mb-10" ></Image>
      
       <div className="flex  space-x-6 gap-x-10 mb-5">

     <div className="w-30">
      <p className="scroll-m-20 text-lg font-bold tracking-tight ">PRODUCT DETAILS</p>
      </div> 
      
      <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum quis ab, a quia asperiores </p>
       </div>
     
      <div className="flex  space-x-10 gap-x-11">
      <p className="scroll-m-20 text-lg font-bold tracking-tight">
      PRODUCT CARE</p>
      <ul className="list-inside">
        <li>Hand wash using cold water.</li>
        <li>Do not using bleach.</li>
        <li>Hang it to dry.</li>
        <li>Iron on low temperature.</li>
      </ul>
      </div>
      </div>
      </div>
  )
}

