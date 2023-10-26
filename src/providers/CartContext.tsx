"use client";
import { Product } from "@/app/utils/types";
import { handleCartReducer } from "@/reducer/CartReducer";
import { ReactNode, createContext, useReducer, useState } from "react";

export const CartContext = createContext<any>({});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  // const [cartItems, setCartItems] = useState(0);
  // const [cartProducts, setCartProducts] = useState<Product[]>([]);
  // const [total, setTotal] = useState(0);
  const [state, dispatch] = useReducer(handleCartReducer, {
    cartItems: 0,
    cartProducts: [],
    total: 0
  });
  return (
    <CartContext.Provider
      value={[state, dispatch]}
    >
      {children}
    </CartContext.Provider>
  );
};
