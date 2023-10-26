"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Key, ShoppingCart, X } from "lucide-react";
import { Product, Size } from "@/app/utils/types";
import pro from "../../public/project.png";
import { useContext, useState } from "react";
import { CartContext } from "../../src/providers/CartContext";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const ProductView = (product: Product) => {
  const {
    size,
    images,
    main_image,
    name,
    subCategory,
    category,
    description,
    isSoldOut,
  } = product;
 
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const {
    cartItems,
    setCartItems,
    cartProducts,
    setCartProducts,
    total,
    setTotal,
  } = useContext(CartContext);

  const prodExistsInCart = () => {
    cartProducts.map((p: Product) => {
      if (p._rev == product._rev) {
        setCartItems(cartItems + quantity);
        p.quantity += quantity;
        p.subTotal += product.price * quantity;
        setTotal(total + p.price);
      }
    });
  };

  // const addToCart = () => {
  //   if (cartProducts.some((p: Product) => p._rev == product._rev)) {
  //     prodExistsInCart();
  //   } else {
  //     const p = {
  //       id: product.id,
  //       name: product.name,
  //       quantity: quantity,
  //       subTotal: product.price * quantity,
  //       image: product.image,
  //       price: product.price,
  //       subCategory: product.subCategory,
  //     };
  //     setCartItems(cartItems + quantity);
  //     setCartProducts([...cartProducts, p]);
  //     setTotal((prevTotal: number) => prevTotal + p.price);
  //     console.log("cartItems", cartProducts);
  //   }
  // };

  return (
    <div className="bg-zinc-50 mb-44">
      <div className="flex my-10 gap-x-3">
        <Image
          className="ml-6"
          src={main_image.asset.url}
          alt="product image"
          width={500}
          height={500}
        ></Image>
        <div className="flex flex-col mt-16 ml-3">
          <h1 className="my-1 font-poppins text-3xl font-medium">
            {product.name}
          </h1>
          <h3 className="mb-4 font-sans text-xl font-semibold text-gray-500">
            {subCategory.name}
          </h3>
          <p className="my-1 font-bold">SELECT SIZE</p>
          <ul className="flex space-x-5 my-1">
            {size.map((s, i) => (
              <li
                key={i}
                onClick={() => {
                  router.push(pathName + `?size=${s.name}`);
                }}
                className={`h-10 w-10 hover:rounded-full hover:bg-gray-300 flex justify-center items-center ${searchParams.get('size') === s.name ? "bg-gray-300 rounded-full" : " "}
                cursor-pointer`}
              >
                {s.name}
              </li>
            ))}
          </ul>

          <div className="flex gap-3 py-4">
            <h3 className="my-2 font-bold text-lg">Quantity:</h3>
            <div className="flex gap-2">
              {/* <Button onClick={() => setQuantity(Math.max(quantity-1,1))} className="rounded-full"> */}
              <Button
                onClick={() => setQuantity(Math.max(quantity - 1, 1))}
                className="rounded-full bg-slate-200 text-black text-xl"
              >
                -
              </Button>
              <span className="w-9 justify-center items-center flex">
                {quantity}
              </span>
              <Button
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
                className="rounded-full bg-slate-200 text-black text-xl"
              >
                +
              </Button>
            </div>
          </div>
          <div className="flex gap-4 mt-3">
            <Button className="bg-black py-6" onClick={() => {}}>
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>
            <div className="flex justify-center items-center text-2xl font-semibold font-poppins">
              <h1>
                <b>$ {product.price}.00</b>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto bg-white mt-36 px-28">
        <Image
          src={pro}
          alt="product"
          className="border-b-4 border-gray-200 mb-10"
          width={900}
        ></Image>

        <div className="flex  space-x-6 gap-x-10 mb-5">
          <div className="w-30">
            <p className=" text-lg font-bold tracking-tight text-gray-500">
              PRODUCT DETAILS
            </p>
          </div>

          <p>{description}</p>
        </div>

        {/* <div className="flex  space-x-10 gap-x-11">
          <p className="scroll-m-20 text-lg font-bold tracking-tight text-gray-500">
            PRODUCT CARE
          </p>
          <ol className="list-item list-disc">
            <li>Hand wash using cold water.</li>
            <li>Do not using bleach.</li>
            <li>Hang it to dry.</li>
            <li>Iron on low temperature.</li>
          </ol> */}
        {/* </div> */}
      </div>
    </div>
  );
};
