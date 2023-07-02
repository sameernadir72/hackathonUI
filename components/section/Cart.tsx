import { Product } from "@/app/utils/types"
import { Trash2 } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import { useContext, useState } from "react"
import { contextProduct, contextVal } from "./CartContext";

export default function CartView ({product}:{product:Product}){
    const { cartItems, setCartItems } = useContext(contextVal);
    const {cartProducts, setCartProducts} = useContext(contextProduct);

    const handleDeleteCart = () =>{
        const updatedCart:Product[] = cartProducts.filter((p:Product)=>(p.id !== product.id));
        setCartProducts(updatedCart);
    }

    const handleIncreaseQuantity = (increase:boolean) => {
        (cartProducts.map((pr:Product)=>{
            if(pr.id == product.id){
                if(increase){
                    pr.quantity+=1;
                    pr.subTotal += pr.price;
                }
                else{
                    if(product.quantity>1){
                    pr.quantity-=1;
                    pr.subTotal-=pr.price;
                    }
                }
            }
        }));
    }

    return(
        <div className="">
            <div className="flex justify-center">
            <Image className="rounded-lg" src={product.image} alt="product image" width={160} height={30}></Image>
            <div className="mr-44 ml-7">
                <span className="flex">{product.name}<button onClick={() => handleDeleteCart()}><Trash2/></button></span>
                <p>{product.subCategory}</p>
                <p>Delivery Estimation</p>
                <p>5 Working Days</p>
                <div className="flex">
                <p>${product.subTotal}</p>
                <div className="flex gap-2 ml-28">
              <Button onClick={() => {
                if(product.quantity>1){
                    setCartItems(cartItems-1);
                }
                handleIncreaseQuantity(false);
                }} className="rounded-full">
                -
              </Button>
              <span className="w-9 justify-center items-center flex">{product.quantity}</span>
              <Button
                onClick={() => {
                  setCartItems(cartItems+1);
                  handleIncreaseQuantity(true);
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
            <span className="flex">Quantity<p className="pl-7">{product.quantity} Product</p></span>
            <span className="flex">Sub Total<p className="pl-7">${product.subTotal}</p></span>
            <Button>Process to Checkout</Button>
            </div>

            </div>

        </div>
    )
}
