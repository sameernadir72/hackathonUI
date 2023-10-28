"use client";
import { Product } from "@/app/utils/types";
import { Action, State, handleCartReducer } from "@/reducer/CartReducer";
import { Dispatch, ReactNode, createContext, useReducer, useState } from "react";


export const CartContext = createContext<[State, Dispatch<Action>]>([
  {
    quantity: 1,
    cartItems: 0,
    cartProducts: [],
    total: 0,
    subTotal: 0
  }, () => {}
]);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  // const [cartItems, setCartItems] = useState(0);
  // const [cartProducts, setCartProducts] = useState<Product[]>([]);
  // const [total, setTotal] = useState(0);
  const [state, dispatch] = useReducer(handleCartReducer, {
    quantity:1,
    cartItems: 0,
    cartProducts: [],
    total: 0,
    subTotal: 0
  });
  return (
    <CartContext.Provider
      value={[state, dispatch]}
    >
      {children}
    </CartContext.Provider>
  );
};
