import { Product } from "@/app/utils/types"
import { Trash2 } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import { useContext, useState } from "react"
import { contextProduct, contextVal } from "./CartContext";

export default function CartView (product:Product){
    const { cartItems, setCartItems } = useContext(contextVal);
    const {cartProducts, setCartProducts} = useContext(contextProduct)
    const handleDeleteCart = () =>{
        setCartItems(cartItems - 1);
        setCartProducts(cartProducts.filter((p:any) => p.id !== product.id));
        console.log("product",product.id)
    }
    return(
        <div className="">
            <div className="flex justify-center">
            
            <Image className="rounded-lg" src={product.image} alt="product image" width={160} height={30}></Image>
            
            <div className="mr-44 ml-7">
                <span className="flex">{product.name}<button onClick={() => handleDeleteCart()}><Trash2/></button></span>
                <p>{product.name}</p>
                <p>Delivery Estimation</p>
                <p>5 Working Days</p>
                <div className="flex">
                <p>${product.price}</p>
                <div className="flex gap-2 ml-28">
              <Button onClick={() => setCartItems(Math.max(cartItems-1,1))} className="rounded-full ">
                -
              </Button>
              <span className="w-9 justify-center items-center flex">{cartItems}</span>
              <Button
                onClick={() => {
                  setCartItems(cartItems+1);
                }}
                className="rounded-full"
              >
                +
              </Button>
            </div>
            </div>
            </div>

            <div className="bg-slate-100 space-y-5 ml-10">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Order Summary</h3>
            <span className="flex">Quantity<p className="pl-7">{1} Product</p></span>
            <span>Sub Total<p>${product.price}</p></span>
            <Button>Process to Checkout</Button>
            </div>

            </div>

        </div>
    )
}