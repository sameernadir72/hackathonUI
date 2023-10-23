"use client";
import Image from "next/image";
import { Menu, Search, ShoppingCart, XSquare } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./../ui/navigation-menu";
import { Category, Product } from "@/app/utils/types";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../src/providers/CartContext";
import { fetchCategories } from "@/app/data";
import { Sora } from "next/font/google";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const sora = Sora({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = ({ navLinks }: { navLinks: Category[] }) => {
  const { cartItems } = useContext(CartContext);
  const [show, setShow] = useState(false);

  return (
    <nav className={`flex justify-between items-center ${sora.className}`}>
      {/* <div className={`   lg:block hidden`}> */}

      <Link href="/">
        <Image src={"/Logo.webp"} alt="logo" width={140} height={140} />
      </Link>

      <div className="hidden md:block lg:block">
        <NavigationMenu>
          <NavigationMenuList className="space-x-12">
            <NavigationMenuItem className="text-lg">
              <Link href={`/shop`}>Shop</Link>
            </NavigationMenuItem>
            {navLinks != null
              ? navLinks.slice(0, 4).map((category) => (
                  <NavigationMenuItem className=" text-lg" key={category.id}>
                    <Link href={`/shop/${category.name}`}>{category.name}</Link>
                  </NavigationMenuItem>
                ))
              : null}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="hidden md:block lg:block">
        <div className="flex border border-black-600 rounded-lg items-center  gap-x-6">
          <Search className="bg-white rounded-l h-4 pl-2" />
          <input
            type="text"
            placeholder="What you are looking for"
            className="rounded-r p-1 w-72 focus:outline-none"
          />
        </div>
      </div>

      <div className="p-2 rounded-full bg-gray-200 hover:scale ease-in duration-300  hidden lg:block md:block">
        <Link href="/cart">
          <ShoppingCart />
          <span className="absolute top-0 right-0 h-6 w-6 text-center rounded-full bg-[#f02d34] text-white">
            {cartItems}
          </span>
        </Link>
      </div>

      <div className="lg:hidden md:hidden sm:block ">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent className="w-[300px]">
            <SheetHeader className="gap-y-1">
              {navLinks != null
                ? navLinks.slice(0, 6).map((category) => (
                    <SheetTitle className=" text-lg" key={category.id}>
                      <Link href={`/shop/${category.name}`}>
                        {category.name}
                      </Link>
                    </SheetTitle>
                  ))
                : null}
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
