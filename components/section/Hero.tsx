import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex">
    <div className="px-28 m-4 mt-16 space-y-9">
    <Button className="cursor-text text-base p-4 px-7 bg-blue-100 text-blue-700 font-bold" variant="secondary">Sale 70%</Button>
      <h1 className="scroll-m-20 text-9xl font-extrabold tracking-widest lg:text-5xl max-w-md ">
        An Industrial Take on Streetwear
      </h1>
      <p className="leading-7 text-base [&:not(:first-child)]:mt-6 w-72 text-gray-700 ">
        Anyone can beat you but no one can beat your outfit as long as you wear
        Dine outfits.
      </p>
      <Button className="">
        <ShoppingCart className="mr-2 h-5 w-5" /> Start Shopping
      </Button>
    </div>

    <Image className="rounded-full" src="/heroImg.jpg" alt="hero image" width={350} height={100}></Image>
    </div>
  );
};

export default Hero;
