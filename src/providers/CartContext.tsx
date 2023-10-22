"use client";
import { Product } from "@/app/utils/types";
import { ReactNode, createContext, useState } from "react";

export const CartContext = createContext<any>({});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState(0);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);

  return (
    <CartContext.Provider value={{cartItems,setCartItems,cartProducts, setCartProducts, total, setTotal}}>
      {children}
    </CartContext.Provider>
  );
};
