"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { ShoppingCart, X } from "lucide-react";
import { CartProduct, Product } from "@/app/utils/types";
import pro from "../../public/project.png";
import { useContext, useState } from "react";
import { contextProduct, contextVal } from "./CartContext";

export const ProductView = (product: Product) => {
  const { cartItems, setCartItems } = useContext(contextVal);
  const { cartProducts, setCartProducts } = useContext(contextProduct);
  const [quantity,setQuantity] = useState(1);

  const addToCart = () => {
    const p = {
      id: product.id,
      name: product.name,
      quantity: quantity,
      subTotal: product.price*quantity,
      image: product.image,
      price: product.price
    }
    setCartItems(cartItems + quantity);
    setCartProducts([...cartProducts, p]);
    console.log("cartItems", cartProducts);
  };

  // const removeFromCart = () => {
  //   if(cartItems > 0){
  //     setCartItems(cartItems - 1);
  //     setCartProducts(cartProducts.splice(cartProducts, 0));
  //   }
  // };
  
  return (
    
    <div>
      <div className="flex justify-center my-10 gap-x-3">
        <Image src={product.image} alt="product image"></Image>
        <div className="flex flex-col ">
          <h1 className="my-1">{product.name}</h1>
          <h3 className="my-1">{product.category}</h3>
          <p className="my-1">SELECT SIZE</p>
          <ul className="flex space-x-5 my-1">
            <li className="h-10 w-10 hover:rounded-full hover:bg-gray-300 flex justify-center items-center">
              XS
            </li>
            <li className="h-10 w-10 hover:rounded-full hover:bg-gray-300 flex justify-center items-center">
              S
            </li>
            <li className="h-10 w-10 hover:rounded-full hover:bg-gray-300 flex justify-center items-center">
              M
            </li>
            <li className="h-10 w-10 hover:rounded-full hover:bg-gray-300 flex justify-center items-center">
              L
            </li>
            <li className="h-10 w-10 hover:rounded-full hover:bg-gray-300 flex justify-center items-center">
              XL
            </li>
          </ul>
        
          <div className="flex gap-3 py-4">
            <h3 className="my-1">Quantity</h3>
            <div className="flex gap-2">
              <Button onClick={() => setQuantity(Math.max(quantity-1,1))} className="rounded-full">
                -
              </Button>
              <span className="w-9 justify-center items-center flex">{quantity}</span>
              <Button
                onClick={() => {
                  setQuantity(quantity+1);
                }}
                className="rounded-full"
              >
                +
              </Button>
            </div>
          </div>
          <div className="flex gap-4">
            <Button className="bg-black py-5" onClick={addToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
            <div className="mt-3">
              <h1>
                <b>$ {product.price}</b>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto px-40  ">
        <Image
          src={pro}
          alt="product"
          className="border-b-2 border-gray-200 mb-10"
        ></Image>

        <div className="flex  space-x-6 gap-x-10 mb-5">
          <div className="w-30">
            <p className="scroll-m-20 text-lg font-bold tracking-tight ">
              PRODUCT DETAILS
            </p>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            laborum quis ab, a quia asperiores{" "}
          </p>
        </div>

        <div className="flex  space-x-10 gap-x-11">
          <p className="scroll-m-20 text-lg font-bold tracking-tight">
            PRODUCT CARE
          </p>
          <ul className="list-inside">
            <li>Hand wash using cold water.</li>
            <li>Do not using bleach.</li>
            <li>Hang it to dry.</li>
            <li>Iron on low temperature.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
