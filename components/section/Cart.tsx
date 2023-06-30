import { Product } from "@/app/utils/types"
import { DeleteIcon, LucideDelete } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import { useState } from "react"

export default function CartView (product:Product){
    return(
        <div className="">
            <div className="flex justify-center">
            
            <Image src={product.image} alt="product image"></Image>
            
            <div>
                <span className="flex">{product.name}<LucideDelete/></span>
                <p>{product.name}</p>
                <p>Delivery Estimation</p>
                <p>5 Working Days</p>
                <p>${product.price}</p>
            </div>

            <div className="bg-slate-100 space-y-5 ml-10">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Order Summary</h3>
            <span>Quantity<p>{1}Product</p></span>
            <span>Sub Total<p>${product.price}</p></span>
            <Button>Process to Checkout</Button>
            </div>

            </div>

        </div>
    )
}