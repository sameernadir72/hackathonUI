import Image from "next/image";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/app/utils/types";

export const ProductView = (product:Product) => {
  return (
    <div>
    <div className="flex justify-center ">
      <Image src={product.image} alt="product image"></Image>
      <div className="">
      <h3>{product.name}</h3>
      <h3>{product.category}</h3>
      <p className="">SELECT SIZE</p>
      <ul className="flex space-x-5">
        <li>XS</li>
        <li>S</li>
        <li>M</li>
        <li>L</li>
        <li>XL</li>
      </ul>
      <h3>Quantity</h3>
      <Button className="bg-black py-5">
        <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
      </Button>
      </div>
      </div>

      <div className="">
      <h2 className="scroll-m-20 border-b-2 border-gray-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      Product Information</h2>
      <div className="flex">
      <p className="scroll-m-20 text-lg font-bold tracking-tight ">
      PRODUCT DETAILS</p>
      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum quis ab, a quia asperiores adipisci quibusdam hic earum, aliquid, temporibus animi eaque cumque aspernatur aperiam quas eum exercitationem? Nam.</p>
      </div>
      <div className="flex">
      <p className="scroll-m-20 text-lg font-bold tracking-tight">
      PRODUCT CARE</p>
      <ul className="list-inside">
        <li>Hand wash using cold water.</li>
        <li>Do not using bleach.</li>
        <li>Hang it to dry.</li>
        <li>Iron on low temperature.</li>
      </ul>
      </div>
      </div>
      </div>
  )
}
