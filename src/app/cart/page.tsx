"use client";
import CartView from "../../../components/section/Cart";
import { products } from "../utils/mock";

import { Product } from "../utils/types";
import { CartProduct, Product } from "../utils/types";
import { contextProduct } from "../../../components/section/CartContext";
import { useContext } from "react";


export default function Page() {
  const { cartProducts } = useContext(contextProduct);
  return (
    <div>
      <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
        Shopping Cart
      </h3>
      <div>
        {cartProducts.length === 0 ? (
         <div>
         <h1 className="font-bold">Your Shopping Bag Is Empty</h1>
       </div>
        ) : (

          cartProducts.map((product: Product, index: number) => (
            <CartView key={index} product={product} />

          ))
        )}
      </div>
    </div>
  );
}
