"use client";
import { Product } from "@/app/utils/types";
import { ReactNode, createContext, useState } from "react";

export const contextVal = createContext<any>(null);
export const contextProduct = createContext<any>({});
export const totalAmount = createContext<any>(null);

export const CartContext = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState(0);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  return (
    <contextVal.Provider value={{ cartItems, setCartItems }}>
      <contextProduct.Provider value={{ cartProducts, setCartProducts }}>
        <totalAmount.Provider value={{ total, setTotal }}>
          {children}
        </totalAmount.Provider>
      </contextProduct.Provider>
    </contextVal.Provider>
  );
};
