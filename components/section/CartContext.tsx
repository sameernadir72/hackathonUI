"use client"
import { CartProduct, Product } from "@/app/utils/types";
import { ReactNode, createContext, useState } from "react"

export const contextVal = createContext<any>(null);
export const contextProduct = createContext<any>({});

export const CartContext = ({children}:{children: ReactNode}) => {
  const [cartItems, setCartItems] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  return (
        <contextVal.Provider value={{cartItems,setCartItems}}>
          <contextProduct.Provider value={{cartProducts,setCartProducts}}>
          {children}
          </contextProduct.Provider>
        </contextVal.Provider>
  )
}
