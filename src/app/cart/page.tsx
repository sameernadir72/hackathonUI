"use client";
import CartView from "../../../components/section/Cart";
import { Product } from "../utils/types";
import { contextProduct } from "../../../components/section/CartContext";
import { useContext } from "react";
import { ShoppingBagIcon } from "lucide-react";


export default function Page() {
  const { cartProducts } = useContext(contextProduct);
  return (
     <div className="m-20 mb-44">
      <div>
      <h3 className="scroll-m-20 text-2xl font-bold tracking-tight text-black -ml-12">
        Shopping Cart
      </h3>
        {cartProducts.length === 0 ? (
         <div>
         <h1 className="font-bold flex flex-col justify-center items-center text-4xl text-black mt-10 gap-y-4"><span><ShoppingBagIcon className="h-24 w-24"/></span>Your shopping bag is empty</h1>
         </div>) : (
          cartProducts.map((product: Product, index: number) => (
            <CartView key={index} product={product} />
          ))
        )}
      </div>
      </div>
  );
}
