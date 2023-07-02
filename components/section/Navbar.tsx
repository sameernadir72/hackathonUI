"use client"
import Image from "next/image";
import { Menu, Search, ShoppingCart, XSquare } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./../ui/navigation-menu";
import { CartProduct, Product } from "@/app/utils/types"
import { useContext, useState } from "react"
import { contextProduct, contextVal } from "./CartContext";
const Navbar = () => {
  const {cartItems} = useContext(contextVal);
  const [show ,setShow] = useState(false);
  console.log("show", show);
  return (
    <header >
    <div className="flex justify-between items-center h-20 m-4 px-28">
<nav className=" hidden sm:flex">
  
      <Link href=""><Image src={"/Logo.webp"} alt="website logo" width={150} height={150} /></Link>

      <div>
        <NavigationMenu>
          <NavigationMenuList className=" justify-items-center">
            <NavigationMenuItem className="space-x-12 text-lg">
              <Link href="/allprod/kids">Kids</Link>
              <Link href="/allprod/boys">Boys</Link>
              <Link href="/allprod/men">Men</Link>
              <Link href="/allprod">All Products</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex border border-black-600 rounded-lg items-center pl-2">
        <Search className="bg-white rounded-l h-4" />
        <input
          type="text"
          placeholder="What you are looking for"
          className="rounded-r p-1 w-72 focus:outline-none"
        />
      </div>
      <Link href="/cart" className="p-2 rounded-full bg-gray-200 hover:scale ease-in duration-300">
        <ShoppingCart className="relative"
        />
        <span className="absolute top-6 right-32 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
          {cartItems}
        </span>
      </Link>
</nav>
<div className=" sm:hidden">
<div className="flex  gap-4">
      <Link href=""><Image src={"/Logo.webp"} alt="website logo" width={200} height={250} /></Link>
      <Menu  onClick={() => setShow(true)}/>

    </div>
{
  show && (
    <>
    <div>

    <div className="flex  gap-4">
      <Link href=""><Image src={"/Logo.webp"} alt="website logo" width={150} height={150} /></Link>
      <XSquare onClick={() => setShow(false)}/>

    </div>
    
      <NavigationMenu>
        <NavigationMenuList >
          <NavigationMenuItem >
            <Link href="/allprod/kids">Kids</Link>
            <Link href="/allprod/boys">Boys</Link>
            <Link href="/allprod/men">Men</Link>
            <Link href="/allprod">All Products</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    
      <div>

     <Link href="/cart" className="p-2 rounded-full bg-gray-200 hover:scale ease-in duration-300">
     <ShoppingCart className="relative"
     />
     <span className="absolute top-6 right-32 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
       {cartItems}
     </span>
   </Link>
      </div>
    </div>
    </>
  )
}
</div>
    </div>
    </header>
  );
};

export default Navbar;