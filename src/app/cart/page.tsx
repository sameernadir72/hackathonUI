"use client";
import CartView from "../../../components/section/Cart";
import { Product } from "../utils/types";
import {
  contextProduct,
  contextVal,
  totalAmount,
} from "../../../components/section/CartContext";
import { useContext, useState } from "react";
import { ShoppingBagIcon } from "lucide-react";
import { Button } from "components/ui/button";
import axios from "axios";
import getStripe from "@/lib/stripe-load";
import { createCheckoutSession } from "./checkout"

export default function Page() {
  const { cartProducts } = useContext(contextProduct);
  const { cartItems, setCartItems } = useContext(contextVal);
  const { total } = useContext(totalAmount);

  const handleCheckout = async () => {
    await createCheckoutSession(cartProducts);
  };

  return (
    <div className="m-20 mb-44">
      <div>
        <h3 className="scroll-m-20 text-2xl font-bold tracking-tight text-black -ml-12">
          Shopping Cart
        </h3>
        {cartProducts.length === 0 ? (
          <div>
            <h1 className="font-bold flex flex-col justify-center items-center text-4xl text-black mt-10 gap-y-4">
              <span>
                <ShoppingBagIcon className="h-24 w-24" />
              </span>
              Your shopping bag is empty
            </h1>
          </div>
        ) : (
          cartProducts.map((product: Product, index: number) => (
            <CartView key={index} product={product} />
          ))
        )}

        {cartProducts.length > 0 && (
          <div className="bg-slate-50 space-y-5 ml-7 p-7">
            <h3 className="scroll-m-20 text-xl font-bold font-poppins tracking-tight">
              Order Summary
            </h3>
            <span className="flex font-poppins">
              Quantity<p className="pl-7 w-max">{cartItems} Product</p>
            </span>
            <span className="flex font-poppins">
              Sub Total<p className="pl-7">${total}</p>
            </span>
            <Button
              className="bg-black rounded-none w-max"
              onClick={handleCheckout}
            >
              Process to Checkout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
