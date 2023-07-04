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
import { Product } from "@/app/utils/types"
import { useContext, useState } from "react"
import { contextProduct, contextVal } from "./CartContext";
const Navbar = ({setHide }:any) => {
  const {cartItems} = useContext(contextVal);
  const [show ,setShow] = useState(false);
  return (
    <header >
    <div className="flex justify-between items-center h-20 m-4 px-28">
      <nav className="hidden sm:flex ">
        <div className="pr-20">

      <Link href=""><Image src={"/Logo.webp"} alt="website logo" width={150} height={150} /></Link>
        </div>

      <div>
        <NavigationMenu>
          <NavigationMenuList className=" pr-20">
            <NavigationMenuItem className="space-x-12 text-lg">
              <Link href="/allprod/kids">Kids</Link>
              <Link href="/allprod/boys">Boys</Link>
              <Link href="/allprod/men">Men</Link>
              <Link href="/allprod">All Products</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="pr-2">

      <div className="flex border border-black-600 rounded-lg items-center  gap-x-6">
        <Search className="bg-white rounded-l h-4" />
        <input
          type="text"
          placeholder="What you are looking for"
          className="rounded-r p-1 w-72 focus:outline-none"
        />
      </div>
      </div>
      <div className="p-2 rounded-full bg-gray-200 hover:scale ease-in duration-300 " >

      <Link href="/cart" >
        <ShoppingCart 
        />
        <span className="absolute top-6  h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
          {cartItems}
        </span>
      </Link>
      </div>
</nav>


    </div>
    </header>
  );
};

export default Navbar;