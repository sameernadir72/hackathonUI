import { Product } from "@/app/utils/types";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/providers/CartContext";
// import {
//   contextProduct,
//   contextVal,
//   totalAmount,
// } from "../../src/providers/CartContext";

export default function CartView({ product }: { product: Product }) {
  // const { cartItems, setCartItems } = useContext(contextVal);
  // const { cartProducts, setCartProducts } = useContext(contextProduct);
  // const { total, setTotal } = useContext(totalAmount);

  // const handleDeleteCart = () => {
  //   const updatedCart: Product[] = cartProducts.filter(
  //     (p: Product) => p.id !== product.id
  //   );
  //   setCartProducts(updatedCart);
  //   setTotal(total - product.subTotal);
  //   setCartItems(updatedCart.length);
  // };

  // const handleChangeQuantity = (increase: boolean) => {
  //   cartProducts.map((pr: Product) => {
  //     if (pr.id == product.id) {
  //       if (increase) {
  //         pr.quantity += 1;
  //         pr.subTotal += pr.price;
  //         setTotal((prevTotal: number) => prevTotal + pr.price);
  //       } else {
  //         if (product.quantity > 1) {
  //           pr.quantity -= 1;
  //           pr.subTotal -= pr.price;
  //           setTotal((prevTotal: number) => prevTotal - pr.price);
  //         }
  //       }
  //     }
  //   });
  // };

  const [state, dispatch] = useContext(CartContext);
  console.log("product from Cart: ", product);

  return (
    <div className="">
      <div className="flex justify-center mt-6">
        <Image
          className="rounded-lg"
          src={product.main_image.asset.url}
          alt="product image"
          width={189}
          height={189}
        ></Image>
        <div className="mr-44 ml-7 space-y-3">
          <span className="flex text-xl font-poppins tracking-wide w-96">
            {product.name}
            <button onClick={() => dispatch({type: "DELETE_FROM_CART", payload: {product: product, items: product.quantity}})}>
              <Trash2 className="ml-24" />
            </button>
          </span>
          <p className="text-gray-500 font-semibold">{}</p>
          <p className="font-semibold">Delivery Estimation</p>
          <p className="text-yellow-400 font-semibold text-base">
            5 Working Days
          </p>
          <div className="flex">
            <p className="text-xl font-semibold">${product.subTotal}</p>
            <div className="flex gap-2 ml-56">
              <Button
                onClick={() => dispatch({type: "DECREASE_FROM_CART"})}
                className="rounded-full"
              >
                -
              </Button>
              <span className="w-9 justify-center items-center flex">
                {product.quantity}
              </span>
              <Button
                onClick={() => dispatch({type: "INCREASE_FROM_CART"})}
                className="rounded-full"
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
