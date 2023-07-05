"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Key, ShoppingCart, X } from "lucide-react";
import { Product } from "@/app/utils/types";
import pro from "../../public/project.png";
import { useContext, useState } from "react";
import { contextProduct, contextVal } from "./CartContext";

export const ProductView = (product: Product) => {
  const { cartItems, setCartItems } = useContext(contextVal);
  const { cartProducts, setCartProducts } = useContext(contextProduct);
  const [quantity,setQuantity] = useState(1);

  const prodExistsInCart = () => {
      cartProducts.map((p:Product)=>{
        if(p.id==product.id){
          setCartItems(cartItems + quantity);
          p.quantity+=quantity;
          p.subTotal += product.price*quantity;
        }
      })
    }

  const addToCart = () => {
    if(cartProducts.some((p:Product)=>(p.id==product.id))){
      prodExistsInCart();
    }
    else{
    const p = {
      id: product.id,
      name: product.name,
      quantity: quantity,
      subTotal: product.price*quantity,
      image: product.image,
      price: product.price,
      subCategory: product.subCategory
    }
    setCartItems(cartItems + quantity);
    setCartProducts([...cartProducts, p]);
    console.log("cartItems", cartProducts);
  }
}

const size = ['XS','S','M','L','XL'];
const [selected,setSelected] = useState('')

  return ( 
    <div className="bg-zinc-50 mb-44">
      <div className="flex  my-10 gap-x-3 px-28">
        <Link href=" "><Image src={product.image} alt="pr-img-mini" width={100} height={100}></Image></Link>
        <Image className="ml-6" src={product.image} alt="product image" width={500}></Image>
        <div className="flex flex-col mt-16 ml-3">
          <h1 className="my-1 font-poppins text-3xl font-medium">{product.name}</h1>
          <h3 className="mb-4 font-sans text-xl font-semibold text-gray-500">{product.subCategory}</h3>
          <p className="my-1 font-bold">SELECT SIZE</p>
          <ul className="flex space-x-5 my-1">
            {size.map((s,index)=>(

              <li key={index} onClick={(e)=>{
                // s===e.target.value?
                setSelected(s)}} 
              className={`h-10 w-10 hover:rounded-full hover:bg-gray-300 flex justify-center items-center ${selected===s?'bg-gray-300 rounded-full':' '}`}>
                {s}
              </li>
            ))}
          </ul>
        
          <div className="flex gap-3 py-4">
            <h3 className="my-2 font-bold text-lg">Quantity:</h3>
            <div className="flex gap-2">
              {/* <Button onClick={() => setQuantity(Math.max(quantity-1,1))} className="rounded-full"> */}
              <Button onClick={() => setQuantity(Math.max(quantity-1,1))} className="rounded-full bg-slate-200 text-black text-xl">
                -
              </Button>
              <span className="w-9 justify-center items-center flex">{quantity}</span>
              <Button
                onClick={() => {
                  setQuantity(quantity+1);
                }}
                className="rounded-full bg-slate-200 text-black text-xl"
              >
                +
              </Button>
            </div>
          </div>
          <div className="flex gap-4 mt-3">
            <Button className="bg-black py-6" onClick={addToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
            <div className="flex justify-center items-center text-2xl font-semibold font-poppins">
              <h1>
                <b>$ {product.price}.00</b>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto bg-white mt-36 px-28">
        <Image
          src={pro}
          alt="product"
          className="border-b-4 border-gray-200 mb-10"
          width={900}
        ></Image>

        <div className="flex  space-x-6 gap-x-10 mb-5">
          <div className="w-30">
            <p className=" text-lg font-bold tracking-tight text-gray-500">
              PRODUCT DETAILS
            </p>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            laborum quis ab, a quia asperiores{" "}
          </p>
        </div>

        <div className="flex  space-x-10 gap-x-11">
          <p className="scroll-m-20 text-lg font-bold tracking-tight text-gray-500">
            PRODUCT CARE
          </p>
          <ol className="list-item list-disc">
            <li>Hand wash using cold water.</li>
            <li>Do not using bleach.</li>
            <li>Hang it to dry.</li>
            <li>Iron on low temperature.</li>
          </ol>
        </div>
      </div>
    </div>
  );
};